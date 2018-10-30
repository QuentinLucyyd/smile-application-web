import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageDashboardComponent } from './sub-page-dashboard.component';

describe('SubPageDashboardComponent', () => {
  let component: SubPageDashboardComponent;
  let fixture: ComponentFixture<SubPageDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
