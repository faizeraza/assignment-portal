import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment25Component } from './assignment25.component';

describe('Assignment25Component', () => {
  let component: Assignment25Component;
  let fixture: ComponentFixture<Assignment25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
