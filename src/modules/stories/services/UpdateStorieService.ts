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
    id: string;
    title: string;
    tasks: Tasks[];
}

class UpdateStorieService {
    public async execute({ id, title, tasks }: IRequest): Promise<Storie> {
        const storieRepository = getCustomRepository(StoriesRepository);
        const storie = await storieRepository.findOne(id);
        const tasksRepository = getCustomRepository(TaskRepository);

        if (!storie) {
            throw new AppError('Product not found');
        }

        const productExists = await storieRepository.findById(id);

        if (!productExists) {
            throw new AppError('Not Exist Story with this id');
        }

        const tasksExists = await tasksRepository.findAllByIds(tasks);
        if (tasksExists.length) {
            throw new AppError('Tasks already exists with this id');
        }
        storie.title = title;
        storie.tasks = tasks;

        await storieRepository.save(storie);
        return storie;
    }
}

export default UpdateStorieService;
