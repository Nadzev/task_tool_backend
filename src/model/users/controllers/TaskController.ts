import { Request, Response } from "express";
import { CreateTaskService } from "../typeorm/services/tasks/createTask";
import { DeleteTaskService } from "../typeorm/services/tasks/deleteTaskService";
import { ListTaskService } from "../typeorm/services/tasks/listTaskService";
import { ShowTaskService } from "../typeorm/services/tasks/showTaskService";
import { UpdateTaskService } from "../typeorm/services/tasks/updateTaskService";
export default class TaskController{
    public async index(request: Request, response: Response):Promise<Response>{
        const listTasks = new ListTaskService();
        const list = await listTasks.execute();
        return response.json(list);

    }
    public async show(request: Request, response:Response):Promise<Response>{
        const {name} = request.params;
        const showTask = new ShowTaskService();
        const show = await showTask.execute({name});
        return response.json(show);
    }

    public async create(request: Request, response: Response): Promise<Response>{
        const {nametask, type, date, taskconteudo} = request.body;
        const createTask = new CreateTaskService();
        const task = await createTask.execute({
            nametask,
            type,
            taskconteudo,
        });
        return response.json(task);


    }
    public async update(request: Request, response: Response): Promise<Response>{
        const {name,type, taskconteudo} = request.body;
        const {id} = request.params;
        const updateTask = new UpdateTaskService();
        const task = await updateTask.execute({
            name,
            type,
            taskconteudo,
        });
        return response.json(task);
    }

    public async delete(request:Request, response: Response): Promise<Response>{
        const {name} = request.params;
        const deleteTask = new DeleteTaskService();
        await deleteTask.execute({name});
        return response.json([])

    }


}
