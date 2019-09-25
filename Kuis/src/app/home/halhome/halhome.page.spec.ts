import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalhomePage } from './halhome.page';

describe('HalhomePage', () => {
  let component: HalhomePage;
  let fixture: ComponentFixture<HalhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalhomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
