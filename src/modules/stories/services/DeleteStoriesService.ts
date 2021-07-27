import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import StoriesRepository from '../typeorm/repositories/StoriesRepository';

interface IRequest {
    id: string;
}

class DeletaStoriesService {
    public async execute({ id }: IRequest): Promise<void> {
        const storieRepository = getCustomRepository(StoriesRepository);
        const product = await storieRepository.findOne(id);

        if (!product) {
            throw new AppError('Product not found');
        }

        await storieRepository.remove(product);
    }
}

export default DeletaStoriesService;
