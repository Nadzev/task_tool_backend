import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TaskRepository } from '../typeorm/repositories/TaskRepository';

interface IRequest {
    id: string;
}

class DeletaTaskService {
    public async execute({ id }: IRequest): Promise<void> {
        const taskRepository = getCustomRepository(TaskRepository);
        const product = await taskRepository.findOne(id);

        if (!product) {
            throw new AppError('Product not found');
        }

        await taskRepository.remove(product);
    }
}

export default DeletaTaskService;
