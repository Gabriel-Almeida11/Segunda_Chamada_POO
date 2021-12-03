import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserModules1638478220051 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_modules",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "user_id",
                        type: "uuid",
                        isNullable: false,
                    },

                    {
                        name: "modules_id",
                        type: "uuid",
                        isNullable: false,
                    },

                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    
                ],
                foreignKeys: [
                    {
                        name: 'FKUSER',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete: 'SET NULL', 
                        onUpdate: 'SET NULL', 
                    },

                    {
                        name: 'FKMODULES',
                        referencedTableName: 'modules',
                        referencedColumnNames: ['id'],
                        columnNames: ['modules_id'],
                        onDelete: 'SET NULL', 
                        onUpdate: 'SET NULL', 
                    },
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_modules')
    }

}
