import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressorComponent } from './compressor.component';

describe('CompressorComponent', () => {
  let component: CompressorComponent;
  let fixture: ComponentFixture<CompressorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompressorComponent]
    });
    fixture = TestBed.createComponent(CompressorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
