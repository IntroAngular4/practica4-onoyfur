import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public description: String;
  public numProyectos: number;

  constructor() {}

  ngOnInit() {
    this.description = 'Resumen Proyectos';
    this.numProyectos = environment.projects.length;
  }
}
