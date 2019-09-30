import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumTestComponent } from './breadcrum-test.component';

describe('BreadcrumTestComponent', () => {
  let component: BreadcrumTestComponent;
  let fixture: ComponentFixture<BreadcrumTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
