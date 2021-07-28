import { EntityRepository, Repository } from 'typeorm';
import Storie from '../entities/Storie';

@EntityRepository(Storie)
class StoriesRepository extends Repository<Storie> {
    public async findByTitle(title: string): Promise<Storie | undefined> {
        console.log('Error');
        const storie = await this.findOne({
            where: {
                title,
            },
        });
        return storie;
    }

    // public async findById(id: string): Promise<Storie | undefined> {
    //     const storie = await this.findOne({
    //         where: {
    //             id,
    //         },
    //     });
    //     return storie;
    // }
}

export default StoriesRepository;
