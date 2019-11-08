import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public proyectos: Project[];

  constructor(private projectService: ProjectsService, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.projectService.obtenerProyectos().subscribe(list => (this.proyectos = list));
  }

  public eliminaProyecto(proyecto: Project) {
    this.projectService.eliminaProyecto(proyecto).subscribe(list => (this.proyectos = list));
  }

  public filtraProyectos(filtroNombre: string) {
    this.projectService.filtraProyectos(filtroNombre).subscribe(list => (this.proyectos = list));
  }

  public cargaDatosAPI() {
    this.projectService.cargaDatosApi();
  }
  public borraDatosAPI() {
    this.projectService.borraDatosApi().subscribe(list => (this.proyectos = list));
  }
}
