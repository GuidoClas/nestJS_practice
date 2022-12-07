import { ProjectsService } from './projects.service';
import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';

@Module({
  imports: [AuthModule, ProjectsModule],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
