import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import PublisherService from './publisher.service';
import Publisher from './publisher.entity';

@Controller('publisher')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Post()
  create(@Body() createPublisherDto: Partial<Publisher>) {
    return this.publisherService.create(createPublisherDto);
  }

  @Get()
  findAll() {
    return this.publisherService.getAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePublisherDto: Partial<Publisher>,
  ) {
    return this.publisherService.update(+id, updatePublisherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publisherService.remove(+id);
  }
}
