import { MigrationInterface, QueryRunner } from "typeorm"
import { AppDataSource } from "../data-source"
import { User } from "../entity/User"

export class CreateAdminUser1662076020493 implements MigrationInterface {

  
        async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(
                `INSERT INTO "authenticationts"."user" ("username", "password", "role") VALUES ("admin", "admin", "ADMIN");`,
            )
        }
    
        async down(queryRunner: QueryRunner): Promise<void> {
           
        }

    





    // public async up(queryRunner: QueryRunner): Promise<void> {
    //     let user = new User()
    //     user.username = "admin"
    //     user.password = "admin"
    //     user.hashPassword()
    //     user.role = "ADMIN"
    //     const userRepository = AppDataSource.getRepository(User)
    //     await userRepository.save(user)
    // }

    // public async down(queryRunner: QueryRunner): Promise<void> {
    // }

}
