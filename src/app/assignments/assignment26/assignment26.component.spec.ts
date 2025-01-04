import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment26Component } from './assignment26.component';

describe('Assignment26Component', () => {
  let component: Assignment26Component;
  let fixture: ComponentFixture<Assignment26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
