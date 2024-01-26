import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'Роль пользователя'})
    @IsString({message: 'Должно быть строкой'})

    readonly value: string;

    @ApiProperty({example: 'Администратор', description: 'Администратор'})
    @IsString({message: 'Должно быть строкой'})

    readonly description: string;
}