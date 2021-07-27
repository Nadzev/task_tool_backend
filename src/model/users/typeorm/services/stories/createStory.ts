import { getCustomRepository } from "typeorm";
import { AppError } from "../../../../../shared/erros/AppError";
import {TaskRepository} from "src/model/users/typeorm/repositories/tasksRepository"
import { Task } from "../../entities/taskEntity";
import { Story } from "@modules/typeorm/entities/estoriaEntity";
import { StoryRepository } from "@modules/typeorm/repositories/storiesRepository";

interface IResquest{
    name: string;
    type: string;
    quantidade_task: number;
}

export class CreateStoryService{
    public async execute({name, type,quantidade_task}: IResquest):Promise<Story | undefined>{
        const storyRepository = getCustomRepository(StoryRepository);
        const taskRepository = getCustomRepository(TaskRepository);
        const storyExists = await storyRepository.findByName(name);

        if(storyExists){
            throw new AppError('There is already one Story with this name');
        }
        const story = storyRepository.create({
            name,
            type,
            quantidade_task,

        })
        await storyRepository.save(story);
        return story;
    }
}
export default {CreateStoryService}
