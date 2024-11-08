import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgProgramesComponent } from './pg-programes.component';

describe('PgProgramesComponent', () => {
  let component: PgProgramesComponent;
  let fixture: ComponentFixture<PgProgramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgProgramesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgProgramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
