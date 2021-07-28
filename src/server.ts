import 'reflect-metadata';
import cors from 'cors';
import { errors } from 'celebrate';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import routes from './routes';
import { AppError } from '@shared/errors/AppError';
import '@shared/typeorm';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(
    (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        console.log('ERROR INSTACE', error instanceof AppError);
        if (error instanceof AppError) {
            console.log('ERROR INSTACE');
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }
        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    },
);

app.listen(3333, () => {
    console.log('Server started on port 3333! 🏆');
});
