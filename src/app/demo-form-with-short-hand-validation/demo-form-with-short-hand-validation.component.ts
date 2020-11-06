import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms'

@Component({
  selector: 'app-demo-form-with-short-hand-validation',
  templateUrl: './demo-form-with-short-hand-validation.component.html',
  styleUrls: ['./demo-form-with-short-hand-validation.component.css']
})
export class DemoFormWithShortHandValidationComponent implements OnInit {

  // Gives a form to work with
  myForm: FormGroup;

  // variable for the validator control
  sku: AbstractControl;

  ngOnInit(): void {
  }

  onSubmit(value: string): void{
    console.log('You submitted value:', value)
  }

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({});
  }

  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
    return {invalidSku: true};
    }
  }

}
