import { PostTaskRepository } from "@/repository/task";

export const Post =  () => {
    const repository = new PostTaskRepository("tasks");
    let newTask = {
        name: "task123",
        completed: false
    }
    repository.Post(newTask, (data: any) => {
        console.log(data);
    });
}