import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCompletedGoalsComponent } from './element-completed-goals.component';

describe('ElementCompletedGoalsComponent', () => {
  let component: ElementCompletedGoalsComponent;
  let fixture: ComponentFixture<ElementCompletedGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementCompletedGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementCompletedGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
