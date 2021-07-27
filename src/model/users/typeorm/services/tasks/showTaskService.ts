import { getCustomRepository } from "typeorm";
import { AppError } from "../../../../shared/erros/AppError";
import {TaskRepository} from "@modules/users/typeorm/repositories/tasksRepository"
import { Task } from "../entities/taskEntity";

interface IRequest{
    name: string;
}

export class ShowTaskService{
    public async execute({name}:IRequest):Promise<Task>{
        const taskRepository = getCustomRepository(TaskRepository);
        const task = await taskRepository.findOne(name);
        if(! task){
            throw new AppError('Task not found')
        }
    
        return task;
    }
}
export default {ShowTaskService}