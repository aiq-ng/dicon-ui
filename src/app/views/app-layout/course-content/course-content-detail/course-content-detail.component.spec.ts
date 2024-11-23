import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentDetailComponent } from './course-content-detail.component';

describe('CourseContentDetailComponent', () => {
  let component: CourseContentDetailComponent;
  let fixture: ComponentFixture<CourseContentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseContentDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseContentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
