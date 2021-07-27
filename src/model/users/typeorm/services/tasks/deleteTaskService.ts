import { getCustomRepository } from "typeorm";
import { AppError } from "../../../../shared/erros/AppError";
import {TaskRepository} from "@modules/users/typeorm/repositories/tasksRepository"


interface IRequest{
    name: string;
}

export class DeleteTaskService{
    public async execute({name}:IRequest):Promise<void>{
        const taskRepository = getCustomRepository(TaskRepository);
        const task = await taskRepository.findOne(name);
        if(! task){
            throw new AppError('Task not found');
        }
        
        await taskRepository.remove(task);
    
    
    }
}
export default {DeleteTaskService}