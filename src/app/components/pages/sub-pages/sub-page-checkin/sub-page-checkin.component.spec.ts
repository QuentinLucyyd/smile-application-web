import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageCheckinComponent } from './sub-page-checkin.component';

describe('SubPageCheckinComponent', () => {
  let component: SubPageCheckinComponent;
  let fixture: ComponentFixture<SubPageCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
