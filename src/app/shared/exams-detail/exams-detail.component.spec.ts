import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsDetailComponent } from './exams-detail.component';

describe('ExamsDetailComponent', () => {
  let component: ExamsDetailComponent;
  let fixture: ComponentFixture<ExamsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
