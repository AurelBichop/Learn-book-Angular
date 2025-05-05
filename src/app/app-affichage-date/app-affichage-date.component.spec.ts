import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAffichageDateComponent } from './app-affichage-date.component';

describe('AppAffichageDateComponent', () => {
  let component: AppAffichageDateComponent;
  let fixture: ComponentFixture<AppAffichageDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAffichageDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAffichageDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
