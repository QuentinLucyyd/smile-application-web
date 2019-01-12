import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddInfoComponent } from './modal-add-info.component';

describe('ModalAddInfoComponent', () => {
  let component: ModalAddInfoComponent;
  let fixture: ComponentFixture<ModalAddInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
