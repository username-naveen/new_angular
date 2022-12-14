import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneImageComponent } from './one-image.component';

describe('OneImageComponent', () => {
  let component: OneImageComponent;
  let fixture: ComponentFixture<OneImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
