import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment22Component } from './assignment22.component';

describe('Assignment22Component', () => {
  let component: Assignment22Component;
  let fixture: ComponentFixture<Assignment22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
