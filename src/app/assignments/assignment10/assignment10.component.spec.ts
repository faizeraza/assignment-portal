import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment10Component } from './assignment10.component';

describe('Assignment10Component', () => {
  let component: Assignment10Component;
  let fixture: ComponentFixture<Assignment10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
