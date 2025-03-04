import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherReactiveFormComponent } from './teacher-reactive-form.component';

describe('TeacherReactiveFormComponent', () => {
  let component: TeacherReactiveFormComponent;
  let fixture: ComponentFixture<TeacherReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
