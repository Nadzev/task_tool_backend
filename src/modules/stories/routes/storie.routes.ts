import { celebrate, Joi, Segments, errors } from 'celebrate';
import { Router } from 'express';
import StoriesController from '../controllers/StoriesController';

const storieRouter = Router();
const storieController = new StoriesController();

storieRouter.post('/', storieController.create);
storieRouter.get('/', storieController.index);
storieRouter.get('/:id', storieController.show);

storieRouter.put('/:id', storieController.update);
storieRouter.delete('/:id', storieController.delete);

export default storieRouter;
