/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DispenserFormComponent } from './dispenser-form.component';

describe('DispenserFormComponent', () => {
  let component: DispenserFormComponent;
  let fixture: ComponentFixture<DispenserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispenserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispenserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
