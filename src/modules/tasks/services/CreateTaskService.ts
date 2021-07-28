import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import { Tasks } from '../typeorm/entities/Task';
import { TaskRepository } from '../typeorm/repositories/TaskRepository';

interface IRequest {
    title: string;
    deadline: string;
    done: boolean;
}

export class CreateTaskService {
    public async execute({ title, deadline, done }: IRequest): Promise<Tasks> {
        console.log('Execute =>');
        const taskRepository = getCustomRepository(TaskRepository);
        const taskExists = await taskRepository.findByTitle(title);
        console.log('Depois ==>');
        if (taskExists) {
            console.log('Error');
            throw new AppError('There is already one task with this title');
        }
        const task = taskRepository.create({
            title,
            deadline,
            done,
        });
        await taskRepository.save(task);
        return task;
    }
}

export default CreateTaskService;
