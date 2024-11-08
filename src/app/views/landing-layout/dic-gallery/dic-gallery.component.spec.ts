import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicGalleryComponent } from './dic-gallery.component';

describe('DicGalleryComponent', () => {
  let component: DicGalleryComponent;
  let fixture: ComponentFixture<DicGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DicGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
