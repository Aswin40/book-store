import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Publisher from './publisher.entity';
import { BaseService } from 'src/util/base.service';
import CreatePublisherDto from './createPublisher.dto';
import UpdatePublisherDto from './updatePublisher.dto';

@Injectable()
export default class PublisherService extends BaseService<Publisher> {
  constructor(
    @InjectRepository(Publisher)
    private publisherRespository: Repository<Publisher>,
  ) {
    super(publisherRespository);
  }

  async create(createPublisherDto: CreatePublisherDto): Promise<Publisher> {
    return await this.publisherRespository.save(createPublisherDto);
  }

  async getAll(): Promise<Publisher[]> {
    return await this.publisherRespository.find();
  }

  async getById(id: number): Promise<Publisher> {
    return await this.findOneOrFail({ where: { id } });
  }

  async update(
    id: number,
    updatePublisherDto: UpdatePublisherDto,
  ): Promise<Publisher> {
    const publisher = await this.findOneOrFail({ where: { id } });
    const updatedPublisher = Object.assign(publisher, updatePublisherDto);
    return this.publisherRespository.save(updatedPublisher);
  }

  async remove(id: number): Promise<{ message: string }> {
    const publisher = await this.findOneOrFail({
      where: { id },
    });
    const result = await this.publisherRespository.delete(publisher);
    if (result.affected === 0) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return { message: 'Publisher removed successfully' };
  }
}
