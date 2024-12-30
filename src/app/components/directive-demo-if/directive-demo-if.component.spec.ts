import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDemoIfComponent } from './directive-demo-if.component';

describe('DirectiveDemoIfComponent', () => {
  let component: DirectiveDemoIfComponent;
  let fixture: ComponentFixture<DirectiveDemoIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveDemoIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveDemoIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
