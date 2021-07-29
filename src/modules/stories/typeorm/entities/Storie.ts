import { Tasks } from '../../../tasks/typeorm/entities/Task';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stories')
class Storie {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @OneToMany(() => Tasks, tasks => tasks.storie, {
        cascade: true,
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE',
    })
    tasks: Tasks[];
}

export default Storie;
