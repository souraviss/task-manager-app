
import { useSelector } from 'react-redux'


const Task = () => {
  const taskData = useSelector((state:any) => state.taskDB.tasks.tasks);
 
  return (
    <div>
      {
        taskData?.map((task:any) =>(
          <ul key={task._id}>
            <li>{task.name}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default Task