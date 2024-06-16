import { getAPI } from "@/utils/api"
import  { useEffect,useState } from "react"




const Message = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const { data, status } = await getAPI("tasks");
    console.log("data",data);
    console.log("status",status);

    if (status === 200) {
      setData(data);

    }
  }
useEffect(() => {
  getData();
},[]);
console.log("data",data);
  return (
    <div className="h-screen">Message</div>
  )
}

export default Message