import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Storie from '../typeorm/entities/Storie';
import StoriesRepository from '../typeorm/repositories/StoriesRepository';

interface IRequest {
    title: string;
    list: string;
}

export class CreateStoriesService {
    public async execute({
        title,
        list,
    }: IRequest): Promise<Storie | undefined> {
        console.log('Execute =>');
        const storieRepository = getCustomRepository(StoriesRepository);
        const taskExists = await storieRepository.findByTitle(title);
        if (taskExists) {
            console.log('Depois ==>');
            throw new AppError('There is already one task with this title');
        }
        const storie = storieRepository.create({
            title,
            list,
        });
        await storieRepository.save(storie);
        return storie;
    }
}

export default CreateStoriesService;
