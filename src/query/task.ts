

import { GetAllTasks } from '@/actionReducer/taskReducer';
import { GetTaskRepository } from '@/repository/task';
import { responseHandler } from '@/types/type';
import {
    useQuery,
} from '@tanstack/react-query'

export const GetTasks = async () => {
    //const dispatch = useDispatch();
    const repository = new GetTaskRepository("tasks")
    const { data, status } = await repository.GetAll();
    //dispatch(GetAllTasks({data, status}));
    return data as any[];
}