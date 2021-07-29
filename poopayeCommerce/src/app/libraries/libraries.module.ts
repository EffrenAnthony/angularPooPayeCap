import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrariesRoutingModule } from './libraries-routing.module';
import { ChartsComponent } from './components/charts/charts.component';
import { PdfreaderComponent } from './components/pdfreader/pdfreader.component';


@NgModule({
  declarations: [
    ChartsComponent,
    PdfreaderComponent
  ],
  imports: [
    CommonModule,
    LibrariesRoutingModule
  ]
})
export class LibrariesModule { }
