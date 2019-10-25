import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public proyectos: Project[];

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.proyectos = this.projectService.obtenerProyectos();
  }

  public eliminaProyecto(proyecto: Project) {
    this.proyectos = this.projectService.eliminaProyecto(proyecto);
  }

  public filtraProyectos(filtroNombre: string) {
    this.proyectos = this.projectService.filtraProyectos(filtroNombre);
  }
}
