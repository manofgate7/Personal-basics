import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinCalcComponent } from './protein-calc.component';

describe('ProteinCalcComponent', () => {
  let component: ProteinCalcComponent;
  let fixture: ComponentFixture<ProteinCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProteinCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProteinCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
