import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NozzleComponent } from './nozzle.component';

describe('NozzleComponent', () => {
  let component: NozzleComponent;
  let fixture: ComponentFixture<NozzleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NozzleComponent]
    });
    fixture = TestBed.createComponent(NozzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
