import { Request, Response } from "express";
import { CreateTaskService } from "../typeorm/services/createTask";
import { ListTaskService } from "../typeorm/services/listTaskService";
import { ShowTaskService } from "../typeorm/services/showTaskService";

export default class UserController{
    /*public async index(request: Request, response:Response){
        const createTask = new CreateTaskService();
        const task = createTask.execute(re)



    }*/
    public async index(request: Request, response: Response){
        const listTasks = new ListTaskService();
        const list = listTasks.execute();
        return response.json(list);

    }
    public async show(request: Request, response:Response){
        const showUser = new ShowTaskService();
        const show = showUser.execute(request);
        return response.json(show)
    }
}
