import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Iprojects } from './iprojects';
import { Project } from './projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements Iprojects {
  public proyectos: Project[];

  constructor() {
    this.proyectos = environment.projects;
  }

  obtenerProyectos() {
    this.proyectos = environment.projects;
    return this.proyectos;
  }

  eliminaProyecto(proyecto: Project) {
    this.proyectos = this.proyectos.filter(p => p.id !== proyecto.id);
    environment.projects = this.proyectos;
    return this.proyectos;
  }

  filtraProyectos(filtroNombre: string) {
    if (filtroNombre == '') {
      this.proyectos = environment.projects;
    } else {
      this.proyectos = this.proyectos.filter(p => p.nombre.toLowerCase().indexOf(filtroNombre.toLowerCase()) !== -1);
    }
    return this.proyectos;
  }

  guardaProyecto(proyecto: Project) {
    environment.projects.push({ ...proyecto });
    this.proyectos = environment.projects;
    return true;
  }
}