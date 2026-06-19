/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Controller, Get, Post, Delete, Body, Param, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BlogPostEntity } from "./lead.entity";

@Controller("api/blog")
export class BlogController {
  constructor(
    @InjectRepository(BlogPostEntity)
    private readonly blogRepo: Repository<BlogPostEntity>,
  ) {}

  // 1. GET all publications
  @Get()
  async getPosts() {
    return await this.blogRepo.find({ order: { publishedAt: "DESC" } });
  }

  // 2. GET detailed post by slug
  @Get(":slug")
  async getPostBySlug(@Param("slug") slug: string) {
    const post = await this.blogRepo.findOneBy({ slug });
    if (!post) {
      throw new HttpException("Article could not be resolved.", HttpStatus.NOT_FOUND);
    }
    return post;
  }

  // 3. POST new article
  @Post()
  async createPost(@Body() body: any) {
    const { title, summary, content, category, authorName, authorRole, coverImage } = body;

    if (!title || !content || !category) {
      throw new HttpException("Fields: title, content and category are mandatory.", HttpStatus.BAD_REQUEST);
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const readTimeVal = `${Math.max(1, Math.ceil(content.split(" ").length / 200))} Min Read`;

    const post = this.blogRepo.create({
      title,
      slug,
      summary,
      content,
      category,
      authorName: authorName || "Engr Rahman",
      authorRole: authorRole || "Civil Architect",
      coverImage: coverImage || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=640&auto=format&fit=crop",
      readTime: readTimeVal,
    });

    return await this.blogRepo.save(post);
  }

  // 4. DELETE article
  @Delete(":id")
  async deletePost(@Param("id") id: string) {
    const post = await this.blogRepo.findOneBy({ id });
    if (!post) {
      throw new HttpException("Target post cannot be located.", HttpStatus.NOT_FOUND);
    }
    await this.blogRepo.remove(post);
    return { success: true };
  }
}
