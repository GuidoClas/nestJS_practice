import { ProjectsController } from './projects/projects.controller';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [AuthModule, UsersModule, ProjectsModule],
  controllers: [AuthController, ProjectsController],
  providers: [],
})
export class AppModule {}
