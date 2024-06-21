import { GetTaskRepository } from "@/repository/task"
import { getAPI } from "@/utils/api"
import { useEffect, useState } from "react"

import {
  useQuery,
} from '@tanstack/react-query'
import { GetTasks } from "@/query/task"

const Message = () => {
    const { isPending, error, data: tasks, isFetching } = useQuery({
      queryKey: ['repoData'],
      queryFn: async () => {
        const { data, status } = await GetTasks();
        return { data, status }

      }
    })


  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  return (
    <div className="h-screen">Message</div>
  )
}

export default Message