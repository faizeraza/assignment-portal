import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignments15Component } from './assignments15.component';

describe('Assignments15Component', () => {
  let component: Assignments15Component;
  let fixture: ComponentFixture<Assignments15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignments15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignments15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
