import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Author from './author.entity';
import { BaseService } from 'src/util/base.service';
import UpdateAuthorDto from './updateAuthor.dto';
import CreateAuthorDto from './createAuthor.dto';

@Injectable()
export class AuthorService extends BaseService<Author> {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {
    super(authorRepository);
  }

  async create(author: CreateAuthorDto): Promise<Author> {
    return this.authorRepository.save(author);
  }

  async getAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  async getById(id: number): Promise<Author> {
    const author = await this.findOneOrFail({ where: { id } });
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return author;
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    await this.authorRepository.update(id, updateAuthorDto);
    const updatedAuthor = await this.findOneOrFail({
      where: { id },
    });
    if (!updatedAuthor) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return updatedAuthor;
  }

  async remove(id: number): Promise<void> {
    const result = await this.authorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
  }
}
