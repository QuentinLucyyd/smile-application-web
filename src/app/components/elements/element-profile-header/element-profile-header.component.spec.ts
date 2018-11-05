import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementProfileHeaderComponent } from './element-profile-header.component';

describe('ElementProfileHeaderComponent', () => {
  let component: ElementProfileHeaderComponent;
  let fixture: ComponentFixture<ElementProfileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementProfileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
