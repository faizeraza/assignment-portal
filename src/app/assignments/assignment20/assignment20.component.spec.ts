import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment20Component } from './assignment20.component';

describe('Assignment20Component', () => {
  let component: Assignment20Component;
  let fixture: ComponentFixture<Assignment20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
