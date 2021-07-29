import { Request, Response } from 'express';
import CreateStoriesService from '../services/CreataStoriesService';
import DeletaStoriesService from '../services/DeleteStoriesService';
import ListStorieService from '../services/ListStoriesService';
import ShowStoriesService from '../services/ShowStorieService';
import UpdateStorieService from '../services/UpdateStorieService';

export default class StoriesController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        console.log('Verufty');
        const listStorie = new ListStorieService();
        const list = await listStorie.execute();

        return response.json(list);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showStorie = new ShowStoriesService();
        const product = await showStorie.execute({ id });

        return response.json(product);
    }

    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        console.log('Request');
        const { title, tasks } = request.body;
        const createStorie = new CreateStoriesService();

        const product = await createStorie.execute({
            title,
            tasks,
        });

        return response.json(product);
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        console.log('error');
        const { id, title, tasks } = request.body;

        const updateProduct = new UpdateStorieService();

        const product = await updateProduct.execute({
            id,
            title,
            tasks,
        });

        return response.json(product);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.body;

        const deleteProduct = new DeletaStoriesService();

        await deleteProduct.execute({ id });
        return response.json([]);
    }
}
