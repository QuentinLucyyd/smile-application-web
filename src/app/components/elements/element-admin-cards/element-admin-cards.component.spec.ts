import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAdminCardsComponent } from './element-admin-cards.component';

describe('ElementAdminCardsComponent', () => {
  let component: ElementAdminCardsComponent;
  let fixture: ComponentFixture<ElementAdminCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementAdminCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAdminCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
