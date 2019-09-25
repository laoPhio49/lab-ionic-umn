import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalHomePage } from './hal-home.page';

describe('HalHomePage', () => {
  let component: HalHomePage;
  let fixture: ComponentFixture<HalHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
