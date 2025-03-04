import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Teacher } from '../teachers.service';

@Component({
  selector: 'app-teacher-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './teacher-reactive-form.component.html',
  styleUrl: './teacher-reactive-form.component.css',
})
export class TeacherReactiveFormComponent {
  @Output() teacherCreationEventEmitter = new EventEmitter<Teacher>();

  subjects = ['Archi', 'Web', 'Réseaux', 'Système', 'BDD'];

  teacherForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    subject: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.teacherForm.valid) {
      this.teacherCreationEventEmitter.emit(this.teacherForm.value as Teacher);
    }
  }
}
