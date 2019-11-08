import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Project } from '../projects/models/project.model';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public projectId = -1;
  public proyecto: Project;

  constructor(private projectService: ProjectsService, activateRoute: ActivatedRoute) {
    this.projectId = activateRoute.snapshot.params['id'];
    this.proyecto = { codigo: -1, nombre: '', _id: null };
  }
  ngOnInit() {
    //this.proyecto = environment.projects.find(p => p.codigo == this.projectId);
    this.projectService.obtieneProyecto(this.projectId).subscribe(proyecto => (this.proyecto = proyecto));
  }
}
