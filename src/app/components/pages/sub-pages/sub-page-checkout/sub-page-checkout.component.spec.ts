import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageCheckoutComponent } from './sub-page-checkout.component';

describe('SubPageCheckoutComponent', () => {
  let component: SubPageCheckoutComponent;
  let fixture: ComponentFixture<SubPageCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
