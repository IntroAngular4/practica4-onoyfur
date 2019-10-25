import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {
  @Input() public proyectos: Project[];
  @Output() public filtra = new EventEmitter<number>();

  public filtroNombre: string;

  constructor() {}

  ngOnInit() {}
}
