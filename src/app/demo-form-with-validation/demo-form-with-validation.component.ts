import { Component, OnInit } from '@angular/core';
import { 
  FormGroup, 
  FormBuilder, 
  Validators, 
  AbstractControl 
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validation',
  templateUrl: './demo-form-with-validation.component.html',
  styleUrls: ['./demo-form-with-validation.component.css']
})
export class DemoFormWithValidationComponent implements OnInit {

  // Gives a form to work with
  myForm: FormGroup;

  // variable for the validator control
  sku: AbstractControl;

  // Allows the value to be validated by 
  // checking the value the user gives 
  
  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku =  this.myForm.controls['sku'];
  }

  ngOnInit(): void {
  }

  onSubmit(value: string): void{
    console.log('You submitted value:', value)
  }

}
