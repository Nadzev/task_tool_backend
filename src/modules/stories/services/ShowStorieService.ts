import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Storie from '../typeorm/entities/Storie';
import StoriesRepository from '../typeorm/repositories/StoriesRepository';

interface IRequest {
    id: string;
}

class ShowStoriesService {
    public async execute({ id }: IRequest): Promise<Storie | undefined> {
        const storieRepository = getCustomRepository(StoriesRepository);
        const product = storieRepository.findOne(id);

        if (!product) {
            throw new AppError('Product not found');
        }
        return product;
    }
}

export default ShowStoriesService;
