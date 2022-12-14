import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAssignmentIiComponent } from './basic-assignment-ii.component';

describe('BasicAssignmentIiComponent', () => {
  let component: BasicAssignmentIiComponent;
  let fixture: ComponentFixture<BasicAssignmentIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAssignmentIiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAssignmentIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
