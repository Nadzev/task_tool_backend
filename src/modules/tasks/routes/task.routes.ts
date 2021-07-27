import { celebrate, Joi, Segments, errors } from 'celebrate';
import { Router } from 'express';
import TaskController from '../controllers/TasksController';

const tasksRouter = Router();
const taskController = new TaskController();

tasksRouter.get('/', taskController.index);
tasksRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: { id: Joi.string().uuid().required() },
    }),
    taskController.show,
);
tasksRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            title: Joi.string().required(),
            deadline: Joi.string().required(),
            done: Joi.boolean().required(),
        },
    }),
    taskController.create,
);
tasksRouter.put(
    '/:id',
    celebrate({
        [Segments.BODY]: {
            title: Joi.string().required(),
            deadline: Joi.string().required(),
            done: Joi.boolean().required(),
        },
        [Segments.PARAMS]: { id: Joi.string().uuid().required() },
    }),
    taskController.update,
);
tasksRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: { id: Joi.string().uuid().required() },
    }),
    taskController.delete,
);

export default tasksRouter;
