import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    deadlne: string;

    @Column()
    done: string;

    @Column()
    category: string;

    @Column()
    priority: string;

    @Column()
    tableld: string;
    
    constructor(id: string, title: string, description: string, deadlne: string, done: string, category: string, priority: string, tableld: string)
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.deadlne = deadlne;
        this.done = done;
        this.category = category;
        this.priority = priority;
        this.tableld = tableld;
    }
}