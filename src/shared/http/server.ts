import 'reflect-metadata';
import cors from 'cors';
import routes from './routes'
import express, { NextFunction, Request, Response } from 'express'
import '@shared/typeorm';
import {AppError} from '../erros/AppError';
const app = express();

app.use(cors());
app.use(express.json);
app.use(routes);

app.use(
    (error:Error,
    request: Request,
    response: Response,
    next: NextFunction
    )=>{
        if( error instanceof AppError){
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message
            });

        }
        return response.status(500).json({
            status:'error',
            message: 'Internal Server Error'
        })

})
app.listen(3000,()=> {
    console.log("Server is running!")
}
)
