import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageNotesComponent } from './sub-page-notes.component';

describe('SubPageNotesComponent', () => {
  let component: SubPageNotesComponent;
  let fixture: ComponentFixture<SubPageNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
