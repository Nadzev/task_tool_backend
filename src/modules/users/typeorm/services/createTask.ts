import { getCustomRepository } from "typeorm";
import { AppError } from "../../../../shared/erros/AppError";
import {TaskRepository} from "@modules/users/typeorm/repositories/tasksRepository"
import { Task } from "../entities/taskEntity";

interface IResquest{
    name: string;
    type: string;

}
export class CreateTaskService{
    public async execute({name, type}: IResquest):Promise<Task>{
        const taskRepository = getCustomRepository(TaskRepository);
        const taskExists = await taskRepository.findByName(name);
        
        if(taskExists){
            throw new AppError('There is already one task with this name');
        }

        const task = taskRepository.create({
            name,
            type,
        })
        await taskRepository.save(task);
        return task;
    }
}
export default {CreateTaskService}