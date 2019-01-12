import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAdminRecentUsersComponent } from './element-admin-recent-users.component';

describe('ElementAdminRecentUsersComponent', () => {
  let component: ElementAdminRecentUsersComponent;
  let fixture: ComponentFixture<ElementAdminRecentUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementAdminRecentUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAdminRecentUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
