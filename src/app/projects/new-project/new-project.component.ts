import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Project } from '../projects/models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public formHidden: boolean;

  constructor(private router: Router, private projectService: ProjectsService) {}

  ngOnInit() {
    this.formHidden = false;
  }

  public guardarProyecto(proyecto: Project) {
    if (this.projectService.guardaProyecto(proyecto)) {
      this.formHidden = true;
      this.router.navigate(['/projects']);
    }
  }
}
