import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenserComponent } from './dispenser.component';

describe('DispenserComponent', () => {
  let component: DispenserComponent;
  let fixture: ComponentFixture<DispenserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispenserComponent]
    });
    fixture = TestBed.createComponent(DispenserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
