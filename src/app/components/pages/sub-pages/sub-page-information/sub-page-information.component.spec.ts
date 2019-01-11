import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageInformationComponent } from './sub-page-information.component';

describe('SubPageInformationComponent', () => {
  let component: SubPageInformationComponent;
  let fixture: ComponentFixture<SubPageInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
