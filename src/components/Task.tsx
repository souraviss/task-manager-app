
import { useSelector } from 'react-redux'
import { CardStack } from './ui/card-stack';
import { CardStackDemo } from './cardTask';
import { Card, CardDescription, CardTitle } from './Card';
import { PinContainer } from './ui/PinContainer';


const Task = () => {
  const taskData = useSelector((state: any) => state.taskDB.tasks);
  const tasks: any[] = taskData && [...taskData];
  console.log('data', tasks);
  return (
    <>
      {
        tasks && tasks.map((task) => (
          <div className="h-[30rem] border-4 border-solid border-indigo-500 w-full flex items-center justify-center">

            <PinContainer
              title={task.name}
              href="/task"
            >
              <h2>Hello</h2>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[90rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {task.name}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    {task.name}
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
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