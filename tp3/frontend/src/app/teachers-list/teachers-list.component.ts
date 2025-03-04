import { Component, Input } from '@angular/core';
import { Teacher } from '../teachers.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teachers-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './teachers-list.component.html',
  styleUrl: './teachers-list.component.css',
})
export class TeachersListComponent {
  @Input({ required: true }) teachers: Teacher[] | null = [];
}
