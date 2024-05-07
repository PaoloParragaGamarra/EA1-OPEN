import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalStateExamPageComponent } from './mental-state-exam-page.component';

describe('MentalStateExamPageComponent', () => {
  let component: MentalStateExamPageComponent;
  let fixture: ComponentFixture<MentalStateExamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalStateExamPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentalStateExamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
