import { getCustomRepository } from "typeorm";
import { AppError } from "../../../../shared/erros/AppError";
import {TaskRepository} from "@modules/users/typeorm/repositories/tasksRepository"
import { Task } from "../entities/taskEntity";

interface IRequest{
  
    name: string;
    type: string;
    taskconteudo: string;
   
}

export class UpdateTaskService{
    public async execute({name,type, taskconteudo}:IRequest):Promise<Task>{
        const taskRepository = getCustomRepository(TaskRepository);
        const task = await taskRepository.findOne(name);
        if(! task){
            throw new AppError('Task not found')
        }
        const taskExists = await taskRepository.findByName(name);
        
        if(taskExists){
            throw new AppError('There is already one task with this name');
        }

        task.name = name;
        task.type = type;
        task.taskconteudo = taskconteudo;
        task.updated_at.getUTCDate()
        await taskRepository.save(task);
    
        return task;
    }
}
export default {UpdateTaskService}