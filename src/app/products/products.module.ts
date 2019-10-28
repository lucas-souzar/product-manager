import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductFormComponent
    ],
    imports: [ 
        HttpClientModule,
        CommonModule,
        MatTableModule
    ]
})
export class ProductModule { }