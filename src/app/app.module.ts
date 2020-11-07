import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { DemoFormWithValidationComponent } from './demo-form-with-validation/demo-form-with-validation.component';
import { DemoFormWithShortHandValidationComponent } from './demo-form-with-short-hand-validation/demo-form-with-short-hand-validation.component';
import { DemoFormWithEventsComponent } from './demo-form-with-events/demo-form-with-events.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormWithValidationComponent,
    DemoFormWithShortHandValidationComponent,
    DemoFormWithEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
