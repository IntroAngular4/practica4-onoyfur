import { Project } from './projects/models/project.model';

export interface Iprojects {
  obtenerProyectos: () => Project[];
  eliminaProyecto: (proyecto: Project) => Project[];
  filtraProyectos: (filtroNombre: string) => Project[];
  guardaProyecto: (proyecto: Project) => boolean;
}
