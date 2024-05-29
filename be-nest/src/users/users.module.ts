import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { DBModule } from 'src/db/db.module'

@Module({
  imports: [DBModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
