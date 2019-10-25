import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Input() public titulo: string;
  @Input() public proyectos: Project[];
  @Input() public msgNoProyectos: string;
  @Output() public elimina = new EventEmitter<Project>();

  constructor() {}

  ngOnInit() {}
}
