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

  myForm: FormGroup;
  sku: AbstractControl;

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
