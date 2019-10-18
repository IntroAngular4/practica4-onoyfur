import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Project } from '../projects/models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public proyecto: Project;
  public proyectos: Project[];
  public formHidden: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.proyectos = [];
    this.proyecto = { id: -1, nombre: '' };
    this.formHidden = false;
  }

  public guardarProyecto() {
    environment.projects.push({ ...this.proyecto });
    this.proyecto = { id: -1, nombre: '' };
    this.formHidden = true;
    this.router.navigate(['/projects']);
  }
}
