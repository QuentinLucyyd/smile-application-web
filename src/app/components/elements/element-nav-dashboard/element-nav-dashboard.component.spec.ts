import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementNavDashboardComponent } from './element-nav-dashboard.component';

describe('ElementNavDashboardComponent', () => {
  let component: ElementNavDashboardComponent;
  let fixture: ComponentFixture<ElementNavDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementNavDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementNavDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
