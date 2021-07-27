import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    id: string;

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

    @Column()
    tableId: string;

    constructor(
        id: string,
        title: string,
        description: string,
        deadline: string,
        done: boolean,
        category: string,
        priority: string,
        tableld: string,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.done = done;
        this.category = category;
        this.priority = priority;
        this.tableId = tableld;
    }
}
