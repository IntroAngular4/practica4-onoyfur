import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../projects/models/project.model';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  @Input() public titulo: string;
  @Input() public msgAltaOk: string;
  @Input() public proyecto: Project;
  @Input() public formHidden: boolean;
  @Output() public guarda = new EventEmitter<Project>();

  constructor() {}

  ngOnInit() {
    this.proyecto = { id: -1, nombre: '' };
  }
}
