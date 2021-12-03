import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { Query } from "typeorm/driver/Query";

export class CreateUsers1638477538455 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "branch",
                        type: "varchar"
                    },

                    {
                        name: "login",
                        type: "varchar"
                    },
                    
                    {
                        name: "name_user",
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
        await queryRunner.dropTable('users')
    }

}
