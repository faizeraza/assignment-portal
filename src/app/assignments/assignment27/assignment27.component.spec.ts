import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment27Component } from './assignment27.component';

describe('Assignment27Component', () => {
  let component: Assignment27Component;
  let fixture: ComponentFixture<Assignment27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment27Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
