import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment11Component } from './assignment11.component';

describe('Assignment11Component', () => {
  let component: Assignment11Component;
  let fixture: ComponentFixture<Assignment11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
