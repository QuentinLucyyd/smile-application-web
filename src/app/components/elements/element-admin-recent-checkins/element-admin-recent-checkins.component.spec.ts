import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAdminRecentCheckinsComponent } from './element-admin-recent-checkins.component';

describe('ElementAdminRecentCheckinsComponent', () => {
  let component: ElementAdminRecentCheckinsComponent;
  let fixture: ComponentFixture<ElementAdminRecentCheckinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementAdminRecentCheckinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAdminRecentCheckinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
