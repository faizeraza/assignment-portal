import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment18Component } from './assignment18.component';

describe('Assignment18Component', () => {
  let component: Assignment18Component;
  let fixture: ComponentFixture<Assignment18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
