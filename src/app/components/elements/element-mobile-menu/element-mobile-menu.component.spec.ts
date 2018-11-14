import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementMobileMenuComponent } from './element-mobile-menu.component';

describe('ElementMobileMenuComponent', () => {
  let component: ElementMobileMenuComponent;
  let fixture: ComponentFixture<ElementMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
