import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment19Component } from './assignment19.component';

describe('Assignment19Component', () => {
  let component: Assignment19Component;
  let fixture: ComponentFixture<Assignment19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
