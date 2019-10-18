import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
    /*children: [
      { path: 'projects/:id', component: ViewerProjectComponent },
      { path: 'newproject', component: NewProjectComponent }
    ]*/
  },
  { path: 'newproject', component: NewProjectComponent },
  { path: ':id', component: ViewerProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
