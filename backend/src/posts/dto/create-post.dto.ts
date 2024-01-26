import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString, Length} from "class-validator";

export class CreatePostDto {

    @ApiProperty({example: 'Как писать чистый код', description: 'Название статьи'})
    @IsString({message: 'Должно быть строкой'})

    readonly title: string;

    @ApiProperty({example: 'Каким должен быть качественный код? Роберт Мартин выразил это невероятно точно, когда сказал: «Единственная адекватная мера качества кода — это количество восклицаний «какого чёрта!» в минуту»......',
        description: 'Текст статьи'})
    @IsString({message: 'Должно быть строкой'})
    @Length(1, 1500,{message: 'Не меньше 1 и не больше 300'})


    readonly content: string;

    @ApiProperty({example: '12', description: 'ID пользователя'})
    @IsNumber({}, {message: "Должно быть числом"})
    readonly userId: number;

    @ApiProperty({example: 'В данной статье разберем как надо  и как не надо писать код на TypeScript.',
        description: 'Краткое описание статьи'})
    @IsString({message: 'Должно быть строкой'})

    readonly description: string;
}