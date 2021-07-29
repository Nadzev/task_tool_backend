import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class AddStorieToTasks1627535631389 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'tasks',
            new TableColumn({
                name: 'storie_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'tasks',
            new TableForeignKey({
                name: 'StorieTasks',
                columnNames: ['storie_id'],
                referencedTableName: 'stories',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tasks', 'StorieTasks');
        await queryRunner.dropColumn('tasks', 'storie_id');
    }
}
