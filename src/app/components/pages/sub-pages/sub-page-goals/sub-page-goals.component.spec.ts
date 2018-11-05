import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageGoalsComponent } from './sub-page-goals.component';

describe('SubPageGoalsComponent', () => {
  let component: SubPageGoalsComponent;
  let fixture: ComponentFixture<SubPageGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
