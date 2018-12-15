import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageUsersComponent } from './sub-page-users.component';

describe('SubPageUsersComponent', () => {
  let component: SubPageUsersComponent;
  let fixture: ComponentFixture<SubPageUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
