import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment17Component } from './assignment17.component';

describe('Assignment17Component', () => {
  let component: Assignment17Component;
  let fixture: ComponentFixture<Assignment17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
