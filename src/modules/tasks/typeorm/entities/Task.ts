import Storie from '../../../stories/typeorm/entities/Storie';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => Storie, task => task.tasks, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'storie_id' })
    storie: Storie;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    deadline: string;

    @Column()
    done: boolean;

    @Column()
    category: string;

    @Column()
    priority: string;
}
