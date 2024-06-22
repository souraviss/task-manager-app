

import {
  useQuery,
} from '@tanstack/react-query'
import { GetTasks } from "@/query/task"
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { GetAllTasks } from '@/actionReducer/taskReducer';
import Task from '@/components/Task';

const Message = () => {
  const dispatch = useDispatch();
  
  useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const data = await GetTasks();
      dispatch(GetAllTasks({...data}));
      return null;
    }
  })



  // if (isPending) return 'Loading...'

  // if (error) return 'An error has occurred: ' + error.message


  return (
    <div className="h-screen">
      <Task />
    </div>
  )
}

export default Message