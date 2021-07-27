import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Tasks } from '../typeorm/entities/Task';
import { TaskRepository } from '../typeorm/repositories/TaskRepository';

interface IRequest {
    id: string;
    title: string;
    deadline: string;
    done: boolean;
}

class UpdateTaskService {
    public async execute({
        id,
        title,
        deadline,
        done,
    }: IRequest): Promise<Tasks | undefined> {
        const taskRepository = getCustomRepository(TaskRepository);

        const task = await taskRepository.findOne(id);

        if (!task) {
            throw new AppError('Task not found');
        }

        const taskExists = await taskRepository.findByTitle(title);

        if (taskExists) {
            throw new AppError('There is already one task with this title');
        }

        task.title = title;
        task.deadline = deadline;
        task.done = done;
        await taskRepository.save(task);
        return task;
    }
}

export default UpdateTaskService;
