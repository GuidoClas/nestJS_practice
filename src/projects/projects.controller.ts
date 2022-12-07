import { RolesGuard } from './../roles/guards/roles.guard';
import { ProjectCreateDTO } from './dto/project.create.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
  Controller,
  Post,
  Get,
  Request,
  UseGuards,
  Body,
  HttpCode,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Controller('project')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  async createProject(@Body() createProjectDto: ProjectCreateDTO) {
    console.log(createProjectDto);
    this.projectsService.createProject(createProjectDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProjects(@Request() req) {
    return this.projectsService.getAllProjects(req.user);
  }
}
