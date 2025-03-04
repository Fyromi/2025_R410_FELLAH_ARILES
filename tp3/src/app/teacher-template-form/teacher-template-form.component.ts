import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Teacher } from '../teachers.service';

@Component({
  selector: 'app-teacher-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teacher-template-form.component.html',
  styleUrl: './teacher-template-form.component.css',
})
export class TeacherTemplateFormComponent {
  @Output() teacherCreationEventEmitter = new EventEmitter<Teacher>();

  subjects = ['Archi', 'Web', 'Réseaux', 'Système', 'BDD'];

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.teacherCreationEventEmitter.emit(form.value);
    }
  }
}
