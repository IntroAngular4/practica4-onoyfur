import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public description: String;
  public numProyectos: number;

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.description = 'Resumen Proyectos';
    //this.numProyectos = environment.projects.length;
    this.projectService.obtenerProyectos().subscribe(list => (this.numProyectos = list != null ? list.length : 0));
  }
}
