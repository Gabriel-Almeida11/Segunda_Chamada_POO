import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateModules1638478069575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "modules",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "modules_name",
                        type: "varchar"
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
                    }
                ]

            })
        )
    
    }   
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('modules')
}

}
