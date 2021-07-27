import { Request, Response } from 'express';
import { CreateTaskService } from '../services/CreateTaskService';
import DeletaTaskService from '../services/DeleteTaskService';
import ListTaskService from '../services/ListTaskService';
import ShowTaskService from '../services/ShowTaskService';
import UpdateTaskService from '../services/UpdateTaskService';

export default class TaskController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const listProdutcts = new ListTaskService();

        const products = await listProdutcts.execute();

        return response.json(products);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showProduct = new ShowTaskService();
        const product = await showProduct.execute({ id });

        return response.json(product);
    }

    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { title, deadline, done } = request.body;
        console.log(request.body);
        const createTask = new CreateTaskService();

        const product = await createTask.execute({
            title,
            deadline,
            done,
        });

        return response.json(product);
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id, title, deadline, done } = request.body;

        const updateProduct = new UpdateTaskService();

        const product = await updateProduct.execute({
            id,
            title,
            deadline,
            done,
        });

        return response.json(product);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.body;

        const deleteProduct = new DeletaTaskService();

        await deleteProduct.execute({ id });
        return response.json([]);
    }
}
