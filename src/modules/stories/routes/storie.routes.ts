import { celebrate, Joi, Segments, errors } from 'celebrate';
import { Router } from 'express';
import StoriesController from '../controllers/StoriesController';

const storieRouter = Router();
const storieController = new StoriesController();

storieRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            title: Joi.string().required(),
            tasks: Joi.array(),
        },
    }),
    storieController.create,
);
storieRouter.get('/', storieController.index);
storieRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: { id: Joi.string().uuid().required() },
    }),
    storieController.show,
);

storieRouter.put(
    '/:id',
    celebrate({
        [Segments.BODY]: {
            title: Joi.string().required(),
            tasks: Joi.array(),
        },
        [Segments.PARAMS]: { id: Joi.string().required() },
    }),
    storieController.update,
);
storieRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: { id: Joi.string().uuid().required() },
    }),
    storieController.delete,
);

export default storieRouter;
