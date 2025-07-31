import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.css']
})
export class BmiCalcComponent implements OnInit {
  isCalculated: boolean = false;
  bmiNumber: number | undefined;
  bmiForm : FormGroup = this.fb.group({
      height: ['', Validators.required],
      weight: ['', [Validators.required]],
    });
  
  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {

  }

  CalcBMI(): void {
    const height = this.bmiForm.get('height')?.value;
    const weight = this.bmiForm.get('weight')?.value;
    
    if(height && weight) {
      this.bmiNumber = (weight / (height * height) ) * 703;
      this.isCalculated = true;
    }
    
  }

}
