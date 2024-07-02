import { GetTaskRepository } from '@/repository/task';
export const GetTasks = async () => {
    const repository = new GetTaskRepository("tasks")
    const { data, status } = await repository.GetAll();
    if (status === 200) {
        return data as any;
    }
    else
    {
        return [] as any;
    }
}