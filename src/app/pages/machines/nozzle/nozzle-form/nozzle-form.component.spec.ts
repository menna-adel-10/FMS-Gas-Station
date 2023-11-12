/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NozzleFormComponent } from './nozzle-form.component';

describe('NozzleFormComponent', () => {
  let component: NozzleFormComponent;
  let fixture: ComponentFixture<NozzleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NozzleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NozzleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
