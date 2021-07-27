import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Tasks } from '../typeorm/entities/Task';
import { TaskRepository } from '../typeorm/repositories/TaskRepository';

interface IRequest {
    id: string;
}

class ShowTaskService {
    public async execute({ id }: IRequest): Promise<Tasks | undefined> {
        const productsRepository = getCustomRepository(TaskRepository);
        const product = productsRepository.findOne(id);

        if (!product) {
            throw new AppError('Product not found');
        }
        return product;
    }
}

export default ShowTaskService;
