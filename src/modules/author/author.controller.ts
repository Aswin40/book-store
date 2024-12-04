import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import UpdateAuthorDto from './updateAuthor.dto';
import CreateAuthorDto from './createAuthor.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    return await this.authorService.create(createAuthorDto);
  }

  @Get()
  async findAll() {
    return await this.authorService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.authorService.getById(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return await this.authorService.update(+id, updateAuthorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.authorService.remove(+id);
  }
}
