import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from "typeorm";

  @Entity()
  export class Task {
    @PrimaryColumn()
    readonly id: string;
    @Column()
    name: string;

    @Column()
    type: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

   
  }

  export default { Task };
