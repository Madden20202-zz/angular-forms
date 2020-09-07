import { Component, OnInit } from '@angular/core';

// Allows coder to create more customizable forms
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // function called to submit data in the field
  onSubmit(form: any): void{
    console.log('This was submitted:', form);
  }
}
