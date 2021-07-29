import Storie from '@modules/stories/typeorm/entities/Storie';
import { EntityRepository, In, Repository } from 'typeorm';
import { Tasks } from '../entities/Task';

interface IFindTasks {
    id: string;
}
interface IRequest {
    storie: Storie;
    tasks: Tasks;
}
@EntityRepository(Tasks)
export class TaskRepository extends Repository<Tasks> {
    public async findByTitle(title: string): Promise<Tasks | undefined> {
        const task = await this.findOne({
            where: {
                title,
            },
        });
        return task;
    }

    public async findAllByIds(tasks: IFindTasks[]): Promise<Tasks[]> {
        const taskIds = tasks.map(task => task.id);
        const existsTasks = await this.find({
            where: {
                id: In(taskIds),
            },
        });

        return existsTasks;
    }

    // public async findAllTasksByStory(id: string): Promise<Tasks[]> {
    //     const storie = await this.findOne(id, {
    //         relations: ['tasks'],
    //     });
    //     return storie;
    // }
}
