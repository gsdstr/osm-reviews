import { Controller, Get, Param, Query } from '@nestjs/common';
import { FindAllRequestDto } from './dtos/findAll-request.dto';

@Controller('places')
export class PlacesController {
  @Get()
  findAll(@Query() query: string) {
    return `This action returns all cats (limit: ${query} items)`;
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
///places/search,  /places/:id/reviews