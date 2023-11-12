import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressorFormComponent } from './compressor-form.component';

describe('CompressorFormComponent', () => {
  let component: CompressorFormComponent;
  let fixture: ComponentFixture<CompressorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompressorFormComponent]
    });
    fixture = TestBed.createComponent(CompressorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
