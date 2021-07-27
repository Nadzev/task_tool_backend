import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stories')
class Storie {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    list: string;

    constructor(id: string, title: string, list: string) {
        this.id = id;
        this.title = title;
        this.list = list;
    }
}

export default Storie;
