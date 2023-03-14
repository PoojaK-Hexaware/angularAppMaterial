import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCreateComponent } from './create/customer-create.component';
import { CustomerEditComponent } from './edit/customer-edit.component';
import { CustomerSearchComponent } from './search/customer-search.component';
import { CustomerRoutingModule } from '../customer/customer-routing.module';


@NgModule({
  declarations: [
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerSearchComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
