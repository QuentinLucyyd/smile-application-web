import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVerifyComponent } from './page-verify.component';

describe('PageVerifyComponent', () => {
  let component: PageVerifyComponent;
  let fixture: ComponentFixture<PageVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
