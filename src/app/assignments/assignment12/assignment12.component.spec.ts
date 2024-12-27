import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment12Component } from './assignment12.component';

describe('Assignment12Component', () => {
  let component: Assignment12Component;
  let fixture: ComponentFixture<Assignment12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
