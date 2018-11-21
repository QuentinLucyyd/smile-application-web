import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageInviteComponent } from './sub-page-invite.component';

describe('SubPageInviteComponent', () => {
  let component: SubPageInviteComponent;
  let fixture: ComponentFixture<SubPageInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
