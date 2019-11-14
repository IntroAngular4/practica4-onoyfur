import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../projects/models/project.model';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  public formGroup: FormGroup;

  @Input() public titulo: string;
  @Input() public msgAltaOk: string;

  //@Input() public proyecto: Project;

  @Input() public formHidden: boolean;
  @Output() public guarda = new EventEmitter<Project>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();

    //this.proyecto = { codigo: -1, nombre: '', _id: null };
  }

  private buildForm() {
    const nombre = '';
    const codigo = '';
    this.formGroup = this.formBuilder.group({
      codigo: [codigo, Validators.required],
      nombre: [nombre, Validators.required]
    });
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = ' Campo obligatorio'; //JSON.stringify(control.errors);
    }
    return error;
  }

  public guardar() {
    const proyecto = this.formGroup.value;
    this.guarda.emit(proyecto);
  }
}
