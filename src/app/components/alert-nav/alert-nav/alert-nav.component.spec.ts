import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertNavComponent } from './alert-nav.component';

describe('AlertNavComponent', () => {
  let component: AlertNavComponent;
  let fixture: ComponentFixture<AlertNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertNavComponent]
    });
    fixture = TestBed.createComponent(AlertNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
