import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCheckinComponent } from './page-checkin.component';

describe('PageCheckinComponent', () => {
  let component: PageCheckinComponent;
  let fixture: ComponentFixture<PageCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
