

import {
  useQuery,
} from '@tanstack/react-query'
import { GetTasks } from "@/query/task"
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { GetAllTasks } from '@/actionReducer/taskReducer';
import Task from '@/components/Task';
import { Post } from '@/mutation/task';
import { CardStackDemo } from '@/components/cardTask';
import { Button } from '@/components/ui/button';

const Message = () => {
  const dispatch = useDispatch();

  useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const { tasks } = await GetTasks();
      dispatch(GetAllTasks(tasks));
      return null;
    }
  })



  // if (isPending) return 'Loading...'

  // if (error) return 'An error has occurred: ' + error.message


  return (
    <div className="w-full min-h-screen ms-auto px-8">
      {/* <div className="flex min-h-screen items-center bg-green-200">
        <div className="mx-auto rounded bg-white p-10 md:w-2/3 lg:w-1/2">
          <form>
            <div className="mb-5 flex items-center">
              <label className="mr-4 inline-block w-20 text-right text-gray-500"> Name </label>
              <input name="name" id="name" className="flex-1 border-b-2 border-gray-400 py-2 placeholder-gray-300 outline-none focus:border-green-400" type="text" placeholder="task name" />
            </div>
            <div className="mb-10 flex items-center">
              <label className="mr-4 inline-block w-20 text-right text-gray-500"> Completed </label>
              <input type="checkbox" name="completed" id="completed" className="py-2 outline-none checked:bg-green-200 focus:border-green-400" />
            </div>
            <div className="text-right">
              <button className="rounded bg-green-500 px-8 py-3 font-bold text-green-100">Submit</button>
            </div>
          </form>
        </div>
      </div> */}
      {/* <CardStackDemo /> */}
      {/* <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-10'> */}
      <div className='grid grid-cols-1 py-10 gap-4' >
        <Task />
      
      </div>
    </div>
  )
}

export default Message