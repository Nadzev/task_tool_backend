import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";

  @Entity()
  export class Estoria {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    type: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

   
  }

  export default { Estoria };