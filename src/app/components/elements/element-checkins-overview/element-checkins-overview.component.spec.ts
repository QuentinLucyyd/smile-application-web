import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCheckinsOverviewComponent } from './element-checkins-overview.component';

describe('ElementCheckinsOverviewComponent', () => {
  let component: ElementCheckinsOverviewComponent;
  let fixture: ComponentFixture<ElementCheckinsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementCheckinsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementCheckinsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
