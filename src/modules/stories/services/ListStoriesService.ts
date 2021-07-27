import { getCustomRepository } from 'typeorm';
import Storie from '../typeorm/entities/Storie';
import StoriesRepository from '../typeorm/repositories/StoriesRepository';

class ListStorieService {
    public async execute(): Promise<Storie[]> {
        const storieRepository = getCustomRepository(StoriesRepository);
        const products = storieRepository.find();

        return products;
    }
}

export default ListStorieService;
