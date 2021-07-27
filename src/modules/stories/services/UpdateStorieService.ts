import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Storie from '../typeorm/entities/Storie';
import StoriesRepository from '../typeorm/repositories/StoriesRepository';

interface IRequest {
    id: string;
    title: string;
    list: string;
}

class UpdateStorieService {
    public async execute({ id, title, list }: IRequest): Promise<Storie> {
        const storieRepository = getCustomRepository(StoriesRepository);
        const storie = await storieRepository.findOne(id);

        if (!storie) {
            throw new AppError('Product not found');
        }

        const productExists = await storieRepository.findByTitle(title);

        if (productExists) {
            throw new AppError('There is already one product with this name');
        }

        storie.title = title;
        storie.list = list;

        await storieRepository.save(storie);
        return storie;
    }
}

export default UpdateStorieService;
