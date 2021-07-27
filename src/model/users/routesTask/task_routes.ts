import { Router } from "express";
import TaskController from "src/modules/users/controllers/TaskController";
const taskRouter = Router();
const taskController = new TaskController();


taskRouter.get('/',taskController.index);

taskRouter.get('/:id',taskController.show);

taskRouter.post('/',taskController.create);

taskRouter.put('/:id',taskController.update);

taskRouter.delete('/:id',taskController.delete);

export default taskRouter;
