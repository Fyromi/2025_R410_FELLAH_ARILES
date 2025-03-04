import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { Teacher, TeachersService } from './teachers.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  BehaviorSubject,
  Observable,
  startWith,
  Subject,
  Subscription,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ConnexionStatusComponent } from './connexion-status/connexion-status.component';
import { TeacherTemplateFormComponent } from './teacher-template-form/teacher-template-form.component';
import { TeacherReactiveFormComponent } from './teacher-reactive-form/teacher-reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    TeachersListComponent,
    AsyncPipe,
    ConnexionStatusComponent,
    TeacherTemplateFormComponent,
    TeacherReactiveFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
// export class AppComponent implements OnInit {
//   private readonly teacherService = inject(TeachersService);
//   teachers: Teacher[] = [];

//   ngOnInit() {
//     this.teacherService.findAll().subscribe((data) => {
//       this.teachers = data;
//     });
//   }
// }

// Avec Désinscription, version 1
// export class AppComponent implements OnInit {
//   private readonly teacherService = inject(TeachersService);
//   teachers: Teacher[] = [];

//   ngOnInit() {
//     this.teacherService
//       .findAll()
//       .pipe(take(1))
//       .subscribe((data) => {
//         this.teachers = data;
//       });
//   }
// }

// Avec Désinscription, version 1.5 - Destroy Pattern
// export class AppComponent implements OnInit, OnDestroy {
//   private readonly teacherService = inject(TeachersService);
//   private readonly destroy$ = new Subject<boolean>();
//   teachers: Teacher[] = [];

//   ngOnInit() {
//     this.teacherService
//       .findAll()
//       .pipe(takeUntil(this.destroy$))
//       .subscribe((data) => {
//         this.teachers = data;
//       });
//   }

//   ngOnDestroy(): void {
//     this.destroy$.next(true);
//   }
// }

// Avec Désinscription, version 2
// export class AppComponent implements OnInit, OnDestroy {
//   private readonly teacherService = inject(TeachersService);
//   private subscription = new Subscription();

//   teachers: Teacher[] = [];

//   ngOnInit() {
//     this.subscription = this.teacherService.findAll().subscribe((data) => {
//       this.teachers = data;
//     });
//   }

//   ngOnDestroy(): void {
//     this.subscription.unsubscribe();
//   }
// }

// Avec Désinscription, version 3
// export class AppComponent implements OnInit {
//   private readonly teacherService = inject(TeachersService);
//   private readonly destroyRef = inject(DestroyRef);

//   teachers: Teacher[] = [];

//   ngOnInit() {
//     const subscription = this.teacherService.findAll().subscribe((data) => {
//       this.teachers = data;
//     });

//     this.destroyRef.onDestroy(() => {
//       subscription.unsubscribe();
//     });
//   }
// }

// Avec Désinscription, DestroyRef + takeUntilDestroyed
// export class AppComponent implements OnInit {
//   private readonly teacherService = inject(TeachersService);
//   private readonly destroyRef = inject(DestroyRef);

//   teachers: Teacher[] = [];

//   ngOnInit() {
//     this.teacherService
//       .findAll()
//       .pipe(takeUntilDestroyed(this.destroyRef))
//       .subscribe((data) => {
//         this.teachers = data;
//       });
//   }
// }

// Avec Observable et désinscription automatique dans le template
export class AppComponent implements OnInit {
  private readonly teacherService = inject(TeachersService);

  teachers$: Observable<Teacher[]> = new BehaviorSubject<Teacher[]>([]);

  ngOnInit() {
    this.teachers$ = this.teacherService.findAll();
  }

  onTeacherCreation(teacher: Teacher) {
    this.teacherService
      .create(teacher)
      .pipe(
        take(1),
        tap(() => {
          this.teachers$ = this.teacherService.findAll();
        })
      )
      .subscribe({
        complete: () => console.log('Complete'),
      });
  }
}
