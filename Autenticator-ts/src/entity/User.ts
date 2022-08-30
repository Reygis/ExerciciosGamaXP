import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn 
} from "typeorm"
import {Length, IsNotEmpty} from "class-validator"
import * as bcrypt from "bcryptjs"

@Entity()
@Unique(["username"])
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Length(4, 20)
    username: string
    
    @Column()
    @Length(6, 100)
    password: string

    @Column()
    @IsNotEmpty()
    role: string

    @Column()
    @CreateDateColumn()
    createdAt: Date

    @Column()
    @UpdateDateColumn()
    updatedAt: Date

    harshPassword(){
        this.password = bcrypt.hashSync(this.password, 8)
    }

    checkIfUnencryptedPasswordIsValid(unecripytedPassword: string){
        return bcrypt.compareSync(unecripytedPassword, this.password)
    }
}
