import { UUID, randomUUID } from 'node:crypto'
import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { DBService } from 'src/db/db.service';
import { JsonDB } from 'node-json-db';

const DATA_PATH = '/'

@Injectable()
export class ReviewsService {
  readonly reviewsRepository: JsonDB
  constructor(
    dbService: DBService,
  ) {
    this.reviewsRepository = dbService.getReviewsDB();
  }
  async create(createReviewDto: CreateReviewDto) {
    const id = randomUUID()
    const newReview = { ...createReviewDto, id }
    await this.reviewsRepository.push(DATA_PATH + id, newReview)
    return newReview
  }

  async findAll() {
    return await this.reviewsRepository.find(DATA_PATH, (entry: any) => true)
  }

  async findOne(id: number) {
    return await this.reviewsRepository.find(DATA_PATH, (entry: any) => entry.id === id)
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    return await this.reviewsRepository.push(DATA_PATH + id, updateReviewDto)
  }

  async remove(id: number) {
    return await this.reviewsRepository.delete(DATA_PATH + id)
  }
}
