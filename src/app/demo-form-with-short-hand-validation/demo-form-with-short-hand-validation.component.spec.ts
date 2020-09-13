import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithShortHandValidationComponent } from './demo-form-with-short-hand-validation.component';

describe('DemoFormWithShortHandValidationComponent', () => {
  let component: DemoFormWithShortHandValidationComponent;
  let fixture: ComponentFixture<DemoFormWithShortHandValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormWithShortHandValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithShortHandValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
