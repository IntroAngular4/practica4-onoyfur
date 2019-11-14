import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Iprojects } from './iprojects';
import { Project } from './projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements Iprojects {
  public proyectos: Project[];

  private proyectosApi = 'https://api-base.herokuapp.com/api/pub/projects';

  public misProyectos$: Observable<any> = null;

  constructor(private httpClient: HttpClient) {}

  obtenerProyectos() {
    this.misProyectos$ = this.httpClient.get(this.proyectosApi);
    return this.misProyectos$;
  }

  eliminaProyecto(proyecto: Project) {
    const url = `${this.proyectosApi}/${proyecto._id}`;
    this.httpClient.delete(url).subscribe();

    this.misProyectos$ = this.misProyectos$.pipe(map(proj => proj.filter(p => p._id != proyecto._id)));
    return this.misProyectos$;
  }

  filtraProyectos(filtroNombre: string) {
    if (filtroNombre == '') {
      return (this.misProyectos$ = this.obtenerProyectos());
    } else {
      this.misProyectos$ = this.misProyectos$.pipe(
        map(proj => proj.filter(p => p.nombre.toLowerCase().indexOf(filtroNombre.toLowerCase()) !== -1))
      );
      return this.misProyectos$;
    }
  }

  obtieneProyecto(filtroId: number) {
    return this.misProyectos$.pipe(map(proj => proj.find(p => p._id == filtroId)));
  }

  guardaProyecto(proyecto: Project) {
    this.httpClient.post(this.proyectosApi, proyecto).subscribe();
    return true;
  }

  cargaDatosApi() {
    this.proyectos = environment.projects;
    this.proyectos.forEach(proyecto => this.httpClient.post(this.proyectosApi, proyecto).subscribe());
    return true;
  }

  borraDatosApi() {
    this.misProyectos$ = this.httpClient.delete(this.proyectosApi);
    return this.misProyectos$;
  }
}
