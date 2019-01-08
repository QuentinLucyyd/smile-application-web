import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageUserComponent } from './sub-page-user.component';

describe('SubPageUserComponent', () => {
  let component: SubPageUserComponent;
  let fixture: ComponentFixture<SubPageUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
