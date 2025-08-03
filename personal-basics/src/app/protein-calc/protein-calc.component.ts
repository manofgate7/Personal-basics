import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type minMaxTuple = [number, number]; 

@Component({
  selector: 'app-protein-calc',
  templateUrl: './protein-calc.component.html',
  styleUrls: ['./protein-calc.component.css']
})
export class ProteinCalcComponent implements OnInit {
  isCalculated: boolean = false;
  proteinRange: string = "";
  minMaxs: minMaxTuple[] = [
      [0.8, 0.8],
      [0.8, 1.0],
      [1.2, 1.5],
      [1.2, 2.0],
      [1.6, 2.0],
      [2.0, 2.1]
  ];
  
  proteinForm : FormGroup = this.fb.group({
        weight: ['', [Validators.required]],
        age: ['', Validators.required],
        gender: ['', Validators.required],
        selectedActivity: ['', Validators.required],
      });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  CalcProtein() : void {
    const weight = this.proteinForm.get('weight')?.value;
    const gender = this.proteinForm.get('gender')?.value;
    const age = this.proteinForm.get('age')?.value;
    let selectedActivity = this.proteinForm.get('selectedActivity')?.value;
    

    if(weight && gender && age && selectedActivity) {

      //min above 50: 1.2 grams
      if (age >= 50 && selectedActivity < 2) 
      {
        selectedActivity = 2;
      }
      const weightKG = weight / 2.205;
      let minMax = this.minMaxs[selectedActivity];
      let min = minMax[0];
      let max = minMax[1];

      //add .04 to min and max for men and -.04 for women
      min = gender == 'male' ? min + 0.04 : min - 0.04;
      max = gender == 'male' ? max + 0.04 : max - 0.04;

      //min for infants would be .54 grams compared to .36
      if(age < 1)
       {
        min = min * (1.50)
       }
       
      this.proteinRange = min != max ? "" + (min*weightKG).toFixed(2) + " - " + (max * weightKG).toFixed(2) + " grams per day" : "" + (min*weightKG).toFixed(2) + " grams per day";
      this.isCalculated = true;
    }
  }

}
