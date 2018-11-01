import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSidebarComponent } from './element-sidebar.component';

describe('ElementSidebarComponent', () => {
  let component: ElementSidebarComponent;
  let fixture: ComponentFixture<ElementSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
