import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Project } from '../projects/models/project.model';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public projectId = -1;
  public proyecto: Project;

  constructor(activateRoute: ActivatedRoute) {
    this.projectId = activateRoute.snapshot.params['id'];
    this.proyecto = { id: -1, nombre: '' };
  }
  ngOnInit() {
    this.proyecto = environment.projects.find(p => p.id == this.projectId);
  }
}
