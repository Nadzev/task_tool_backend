import { getCustomRepository } from 'typeorm';
import { Task } from '../typeorm/entities/Task';
import { TaskRepository } from '../typeorm/repositories/TaskRepository';

class ListTaskService {
    public async execute(): Promise<Task[]> {
        const productsRepository = getCustomRepository(TaskRepository);
        const products = productsRepository.find();

        return products;
    }
}

export default ListTaskService;
