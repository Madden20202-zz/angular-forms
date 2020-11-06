import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
  FormControl,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-demo-form-with-short-hand-validation',
  templateUrl: './demo-form-with-short-hand-validation.component.html',
  styleUrls: ['./demo-form-with-short-hand-validation.component.css']
})
export class DemoFormWithShortHandValidationComponent implements OnInit {

  // Gives a form to work with
  myForm: FormGroup;

  ngOnInit(): void {
  }

  onSubmit(value: string): void{
    console.log('You submitted value:', value)
  }

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        //both of the validators are required in order for a custom validator to work
        Validators.required, this.skuValidator
      ])]
    });
  }

  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
    return {invalidSku: true};
    }
  }

}
