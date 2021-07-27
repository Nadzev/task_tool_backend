import { getCustomRepository } from "typeorm";
import { AppError } from "../../../../../shared/erros/AppError";
import {TaskRepository} from "src/model/users/typeorm/repositories/tasksRepository"
import { Task } from "../../entities/taskEntity";
import { Story } from "@modules/typeorm/entities/estoriaEntity";
import { StoryRepository } from "@modules/typeorm/repositories/storiesRepository";

interface IResquest{
    nametask: string;
    name: string
    type: string;
    taskconteudo: string;

}
export class CreateTaskService{
    public async execute({nametask,name, type, taskconteudo}: IResquest):Promise<Task>{
        const storyRepository = getCustomRepository(StoryRepository);
        const taskRepository = getCustomRepository(TaskRepository);
        const storyExists = await storyRepository.findByName(name);
        const taskExists = await taskRepository.findByName(nametask);

        if()

        if(taskExists){
            throw new AppError('There is already one task with this name');
        }

        const task = taskRepository.create({
            nametask,
            type,
            taskconteudo,
        })
        await taskRepository.save(task);
        return task;
    }
}
export default {CreateTaskService}
