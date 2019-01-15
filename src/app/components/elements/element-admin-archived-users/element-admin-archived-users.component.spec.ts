import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAdminArchivedUsersComponent } from './element-admin-archived-users.component';

describe('ElementAdminArchivedUsersComponent', () => {
  let component: ElementAdminArchivedUsersComponent;
  let fixture: ComponentFixture<ElementAdminArchivedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementAdminArchivedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAdminArchivedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
