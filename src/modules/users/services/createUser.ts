import { User } from "../typeorm/entities/userEntity";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../typeorm/repositories/userRepository";


interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest):Promise<User> {
    const usersRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }


    const user = usersRepository.create({
      name,
      email,
      admin,
      password,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
