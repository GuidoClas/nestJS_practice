import { Injectable } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class ProjectsService {
  private readonly projects = [
    {
      projectName: 'Nest JS Authentication',
      description: 'A Nest JS authentication API project to practice',
      isOnlyTechLeader: false,
    },
    {
      projectName: 'Nest JS Authorization',
      description: 'A Nest JS authorization API project to practice',
      isOnlyTechLeader: true,
    },
  ];

  createProject(project) {
    console.log(project);
    this.projects.push(project);
  }

  getAllProjects(user: any) {
    return this.projects.filter((project) => {
      return user.roles == Role.Admin ? true : !project.isOnlyTechLeader;
    });
  }
}
