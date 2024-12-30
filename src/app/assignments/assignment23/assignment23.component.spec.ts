import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment23Component } from './assignment23.component';

describe('Assignment23Component', () => {
  let component: Assignment23Component;
  let fixture: ComponentFixture<Assignment23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
