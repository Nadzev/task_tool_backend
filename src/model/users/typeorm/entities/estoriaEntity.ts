import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
import { Task } from "./taskEntity";

  @Entity()
  export class Story {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    quantidade_task: number;

    /*@Column()
    tasks: [];*/

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


  }

  export default { Story };
