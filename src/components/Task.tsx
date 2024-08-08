
import { useSelector } from 'react-redux'
import { CardStack } from './ui/card-stack';
import { CardStackDemo } from './cardTask';
import { Card, CardDescription, CardTitle } from './Card';
import { PinContainer } from './ui/PinContainer';
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { EditorComp } from './editor/EditorComp';

const Task = () => {
  const taskData = useSelector((state: any) => state.taskDB.tasks);
  const tasks: any[] = taskData && [...taskData];
  return (
    <>
      {
        tasks && tasks.map((task) => (
          <div className="h-[30rem] border-4 border-solid border-indigo-500 w-full flex items-center justify-center">

            <PinContainer
              title={task.name}
              state={task.description}
              href="/task"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[90rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {task.name}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    {task.name}
                  </span>
                </div>
                {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <span className='text-base font-normal pl-2'>{task.name}</span>
                </div> */}
                <EditorComp definition={task.description} /> 
                {/* Put Html Editor and Image Buuton */}
                <div className='flex justify-end flex-1 items-end'>
                  <FaRegEdit />
                  <FaRegTrashAlt />
                </div>

              </div>

            </PinContainer>

          </div>
          // <Card key={task._id}>
          //   <CardTitle>{task.name}</CardTitle>
          //   <CardDescription>{task.name}</CardDescription>
          // </Card>
        ))
      }
    </>
  )
}

export default Task