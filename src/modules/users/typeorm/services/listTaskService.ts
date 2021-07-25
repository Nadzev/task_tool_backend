import { getCustomRepository } from "typeorm";
import { AppError } from "../../../../shared/erros/AppError";
import {TaskRepository} from "@modules/users/typeorm/repositories/tasksRepository"
import { Task } from "../entities/taskEntity";


export class ListTaskService{
    public async execute():Promise<Task[]>{
        const taskRepository = getCustomRepository(TaskRepository);
        const tasks = taskRepository.find()
        return tasks;
    }
}
export default {ListTaskService}