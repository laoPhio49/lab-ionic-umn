import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinClubComponent } from './join-club.component';

describe('JoinClubComponent', () => {
  let component: JoinClubComponent;
  let fixture: ComponentFixture<JoinClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinClubComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
