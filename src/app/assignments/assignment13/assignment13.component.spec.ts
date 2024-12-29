import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment13Component } from './assignment13.component';

describe('Assignment13Component', () => {
  let component: Assignment13Component;
  let fixture: ComponentFixture<Assignment13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
