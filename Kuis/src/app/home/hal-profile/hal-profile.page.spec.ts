import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalProfilePage } from './hal-profile.page';

describe('HalProfilePage', () => {
  let component: HalProfilePage;
  let fixture: ComponentFixture<HalProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
