import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecoverComponent } from './page-recover.component';

describe('PageRecoverComponent', () => {
  let component: PageRecoverComponent;
  let fixture: ComponentFixture<PageRecoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRecoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
