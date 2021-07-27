
import { Router } from "express";
import taskRouter from "@modules/routesTask/task_routes";

const routes = Router();

routes.use('/tasks',taskRouter);

export default routes;
