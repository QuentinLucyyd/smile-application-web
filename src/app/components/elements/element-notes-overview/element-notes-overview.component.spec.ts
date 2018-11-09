import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementNotesOverviewComponent } from './element-notes-overview.component';

describe('ElementNotesOverviewComponent', () => {
  let component: ElementNotesOverviewComponent;
  let fixture: ComponentFixture<ElementNotesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementNotesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementNotesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
