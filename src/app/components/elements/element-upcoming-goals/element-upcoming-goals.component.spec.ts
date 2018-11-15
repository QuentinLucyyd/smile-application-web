import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementUpcomingGoalsComponent } from './element-upcoming-goals.component';

describe('ElementUpcomingGoalsComponent', () => {
  let component: ElementUpcomingGoalsComponent;
  let fixture: ComponentFixture<ElementUpcomingGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementUpcomingGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementUpcomingGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
