import { EntityRepository, Repository } from 'typeorm';
import Storie from '../entities/Storie';

interface ITask {
    task_id: string;
    title: string;
    done: boolean;
    deadline: string;
}

interface IRequest {
    title: string;
    storie_tasks: ITask[];
}
@EntityRepository(Storie)
class StoriesRepository extends Repository<Storie> {
    public async findByTitle(title: string): Promise<Storie | undefined> {
        console.log('Error');
        const storie = await this.findOne({
            where: {
                title,
            },
        });
        return storie;
    }

    public async findById(id: string): Promise<Storie | undefined> {
        const storie = await this.findOne(id, {
            relations: ['tasks'],
        });
        return storie;
    }

    public async findAll(): Promise<Storie[]> {
        const stories = await this.find({
            relations: ['tasks'],
        });
        return stories;
    }

    public async createStorie({
        title,
        storie_tasks,
    }: IRequest): Promise<Storie> {
        const storie = this.create({
            title: title,
            tasks: storie_tasks,
        });

        await this.save(storie);
        return storie;
    }
}

export default StoriesRepository;
