import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDisplayGoalComponent } from './modal-display-goal.component';

describe('ModalDisplayGoalComponent', () => {
  let component: ModalDisplayGoalComponent;
  let fixture: ComponentFixture<ModalDisplayGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDisplayGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDisplayGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
