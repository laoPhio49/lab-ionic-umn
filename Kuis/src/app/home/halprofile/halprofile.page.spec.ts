import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalprofilePage } from './halprofile.page';

describe('HalprofilePage', () => {
  let component: HalprofilePage;
  let fixture: ComponentFixture<HalprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
