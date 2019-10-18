import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public counterClass: String;
  public header: String;
  public description: String;

  public numProyectos: number;

  constructor() {}

  ngOnInit() {
    this.counterClass = 'tag secondary';
    this.header = 'Inicio';
    this.description = 'Resumen Proyectos';
    this.numProyectos = environment.projects.length;
  }
}
