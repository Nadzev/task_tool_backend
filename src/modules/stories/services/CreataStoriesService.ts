import { Tasks } from '@modules/tasks/typeorm/entities/Task';
import { TaskRepository } from '@modules/tasks/typeorm/repositories/TaskRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Storie from '../typeorm/entities/Storie';
import StoriesRepository from '../typeorm/repositories/StoriesRepository';
interface ITask {
    id?: string;
    title: string;
    done: boolean;
    deadline: string;
}
interface IRequest {
    title: string;
    tasks: ITask[];
}

export class CreateStoriesService {
    public async execute({
        title,
        tasks,
    }: IRequest): Promise<Storie | undefined> {
        console.log('Exec-ute =>');
        const storieRepository = getCustomRepository(StoriesRepository);
        const tasksRepository = getCustomRepository(TaskRepository);
        const taskExists = await storieRepository.findByTitle(title);
        if (taskExists) {
            console.log('Depois ==>');
            throw new AppError('There is already one task with this title');
        }
        // const tasksExists = await tasksRepository.findAllByIds(tasks);
        // if (tasksExists.length) {
        //     throw new AppError('Tasks already exists in another story');
        // }
        const storie = storieRepository.create({
            title,
            tasks,
        });
        await storieRepository.save(storie);
        return storie;
    }
}

export default CreateStoriesService;
