import {IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: '12', description: 'ID пользователя'})
    @IsNumber({}, {message: "Должно быть числом"})

    readonly userId: number;

    @ApiProperty({example: 'За хулиганство', description: 'Причина блокировки'})
    @IsString({message: "Должно быть строкой"})

    readonly banReason: string;
}