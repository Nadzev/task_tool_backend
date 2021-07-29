import { User } from "../typeorm/entities/userEntity";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../typeorm/repositories/userRepository";
import {hash} from 'bcryptjs'
import AppError from "@shared/errors/AppError";



interface IUserRequest {
  
  email: string;
  password: string;
}

interface IResponse{
    user: User;
}

class CreateSessionService {
  async execute({email, password }: IUserRequest):Promise<IResponse> {
    const usersRepository = getCustomRepository(UserRepository);
    const user = await usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Email incorrect/password combination",401);
    }

    const passwordConfirmed = await compare(password,user.password);
    if(!passwordConfirmed){
        throw new AppError("Email incorrect/password combination",401);
    }
    return user;
  }
}

export { CreateSessionService };

