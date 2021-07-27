import { EntityRepository, Repository } from "typeorm";
import {Task} from "@modules/users/typeorm/entities/taskEntity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    public async findByName(name: string):Promise<Task | undefined> {
        const task = this.findOne({
            where:{
                name,
            }
        });
        return task;
    }
    /*public async findByType(type: string):Promise <void>{
        const tasks = this.createQueryBuilder();
        tasks.getMany

    }*/
    }
   