import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffGeneralInfoComponent } from './staff-general-info.component';

describe('StaffGeneralInfoComponent', () => {
  let component: StaffGeneralInfoComponent;
  let fixture: ComponentFixture<StaffGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffGeneralInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
