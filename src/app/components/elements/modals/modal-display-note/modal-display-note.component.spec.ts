import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDisplayNoteComponent } from './modal-display-note.component';

describe('ModalDisplayNoteComponent', () => {
  let component: ModalDisplayNoteComponent;
  let fixture: ComponentFixture<ModalDisplayNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDisplayNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDisplayNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
