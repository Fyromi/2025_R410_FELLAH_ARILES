import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionStatusComponent } from './connexion-status.component';

describe('ConnexionStatusComponent', () => {
  let component: ConnexionStatusComponent;
  let fixture: ComponentFixture<ConnexionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnexionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
