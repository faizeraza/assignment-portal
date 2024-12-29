import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment16Component } from './assignment16.component';

describe('Assignment16Component', () => {
  let component: Assignment16Component;
  let fixture: ComponentFixture<Assignment16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
