import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestParamComponent } from './request-param.component';

describe('RequestParamComponent', () => {
  let component: RequestParamComponent;
  let fixture: ComponentFixture<RequestParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestParamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
