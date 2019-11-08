import { Observable } from 'rxjs';
import { Project } from './projects/models/project.model';

export interface Iprojects {
  eliminaProyecto: (proyecto: Project) => Observable<Project[]>;
  filtraProyectos: (filtroNombre: string) => Observable<Project[]>;
  guardaProyecto: (proyecto: Project) => boolean;
  obtieneProyecto: (filtroId: number) => Observable<Project>;

  cargaDatosApi: () => boolean;
  borraDatosApi: () => Observable<Project>;
}
