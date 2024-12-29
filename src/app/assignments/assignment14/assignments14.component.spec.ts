import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignments14Component } from './assignments14.component';

describe('Assignments14Component', () => {
  let component: Assignments14Component;
  let fixture: ComponentFixture<Assignments14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignments14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignments14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
