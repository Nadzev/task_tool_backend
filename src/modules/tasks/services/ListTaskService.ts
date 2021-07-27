import { getCustomRepository } from 'typeorm';
import { Tasks } from '../typeorm/entities/Task';
import { TaskRepository } from '../typeorm/repositories/TaskRepository';

class ListTaskService {
    public async execute(): Promise<Tasks[]> {
        const productsRepository = getCustomRepository(TaskRepository);
        const products = productsRepository.find();

        return products;
    }
}

export default ListTaskService;
