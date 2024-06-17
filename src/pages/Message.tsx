import { GetTaskRepository } from "@/repository/task"
import { getAPI } from "@/utils/api"
import { useEffect, useState } from "react"




const Message = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    // initializing the repository
    const repository = new GetTaskRepository("tasks")
    const { data, status } = await repository.GetAll();
    //console.log("data", data);
    //console.log("data", status);


    if (status === 200) {
      setData(data);

    }
  }
  useEffect(() => {
    getData();
  }, []);
  console.log("data",data);
  return (
    <div className="h-screen">Message</div>
  )
}

export default Message