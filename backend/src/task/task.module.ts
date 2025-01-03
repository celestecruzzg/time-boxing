import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TaskController],
  imports: [PrismaModule],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
