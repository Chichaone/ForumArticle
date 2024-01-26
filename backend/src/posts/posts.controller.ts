import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @ApiOperation({summary: 'Получить все статьи'})
    @ApiResponse({status: 200})
    @Get()
    getAll() {
        return this.postService.getAllPosts();
    }

    @Post()
    createPost(@Body() dto: CreatePostDto){
        return this.postService.create(dto)
    }
}
