

import { GetTaskRepository } from '@/repository/task';
import { responseHandler } from '@/types/type';
import {
    useQuery,
} from '@tanstack/react-query'

export const GetTasks = async () => {
    const repository = new GetTaskRepository("tasks")
    const { data, status } = await repository.GetAll();
    return {data, status} as any;
}