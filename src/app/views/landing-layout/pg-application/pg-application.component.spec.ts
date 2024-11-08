import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgApplicationComponent } from './pg-application.component';

describe('PgApplicationComponent', () => {
  let component: PgApplicationComponent;
  let fixture: ComponentFixture<PgApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
