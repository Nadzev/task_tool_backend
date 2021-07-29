import { TaskRepository } from '@modules/tasks/typeorm/repositories/TaskRepository';
import { getCustomRepository } from 'typeorm';
import Storie from '../typeorm/entities/Storie';
import StoriesRepository from '../typeorm/repositories/StoriesRepository';

class ListStorieService {
    public async execute(): Promise<Storie[]> {
        const storieRepository = getCustomRepository(StoriesRepository);
        const stories = storieRepository.findAll();
        // const taskRepositoy = getCustomRepository(TaskRepository);
        return stories;
    }
}

export default ListStorieService;
