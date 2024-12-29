import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDemoSwitchComponent } from './directive-demo-switch.component';

describe('DirectiveDemoSwitchComponent', () => {
  let component: DirectiveDemoSwitchComponent;
  let fixture: ComponentFixture<DirectiveDemoSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveDemoSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveDemoSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
