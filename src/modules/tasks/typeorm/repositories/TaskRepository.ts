import { EntityRepository, Repository } from 'typeorm';
import { Tasks } from '../entities/Task';

@EntityRepository(Tasks)
export class TaskRepository extends Repository<Tasks> {
    public async findByTitle(title: string): Promise<Tasks | undefined> {
        const product = this.findOne({
            where: {
                title,
            },
        });
        return product;
    }
}
