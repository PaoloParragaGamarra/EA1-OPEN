import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCardsComponent } from './exam-cards.component';

describe('ExamCardsComponent', () => {
  let component: ExamCardsComponent;
  let fixture: ComponentFixture<ExamCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
