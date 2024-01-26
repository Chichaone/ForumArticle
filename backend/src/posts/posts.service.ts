import { Injectable } from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {Post} from "./posts.model";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post) {}

    async getAllPosts() {
        return await this.postRepository.findAll({include: {all: true}});
    }

    async create(dto: CreatePostDto) {
        const post = await this.postRepository.create({...dto})
        return post;
    }
}
