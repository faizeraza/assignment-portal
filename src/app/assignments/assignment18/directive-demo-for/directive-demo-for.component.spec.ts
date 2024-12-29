import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDemoForComponent } from './directive-demo-for.component';

describe('DirectiveDemoForComponent', () => {
  let component: DirectiveDemoForComponent;
  let fixture: ComponentFixture<DirectiveDemoForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveDemoForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveDemoForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
