import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterDropdownComponent } from './inter-dropdown.component';

describe('InterDropdownComponent', () => {
  let component: InterDropdownComponent;
  let fixture: ComponentFixture<InterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
