import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment21Component } from './assignment21.component';

describe('Assignment21Component', () => {
  let component: Assignment21Component;
  let fixture: ComponentFixture<Assignment21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
