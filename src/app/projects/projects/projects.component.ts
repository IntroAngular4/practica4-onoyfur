import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from './models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public numProyectos: number;
  public proyectos: Project[];

  constructor() {}

  ngOnInit() {
    this.proyectos = environment.projects;
  }

  public eliminaProyecto(proyecto: Project) {
    this.proyectos = this.proyectos.filter(p => p.id !== proyecto.id);
    environment.projects = this.proyectos;
  }
}
