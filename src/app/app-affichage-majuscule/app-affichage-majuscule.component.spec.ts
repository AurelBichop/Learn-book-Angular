import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAffichageMajusculeComponent } from './app-affichage-majuscule.component';

describe('AppAffichageMajusculeComponent', () => {
  let component: AppAffichageMajusculeComponent;
  let fixture: ComponentFixture<AppAffichageMajusculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAffichageMajusculeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAffichageMajusculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
