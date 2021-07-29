import { getCustomRepository } from 'typeorm';
import { User } from '../typeorm/entities/userEntity';
import {UserRepository} from '@modules/users/typeorm/repositories/userRepository'

class ListUserService {
    public async execute(): Promise<Tasks[]> {
        const userRepository = getCustomRepository(UserRepository);
        const users = userRepository.find();

        return users;
    }
}

export default ListUserService;
