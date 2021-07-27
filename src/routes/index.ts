import tasksRouter from '@modules/tasks/routes/task.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/tasks', tasksRouter);
routes.get('/', (req, res) => {
    return res.json({ message: 'Hello Dev' });
});
export default routes;
