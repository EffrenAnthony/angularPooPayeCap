import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './components/charts/charts.component';
import { PdfreaderComponent } from './components/pdfreader/pdfreader.component';

const routes: Routes = [
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: 'pdfreader',
    component: PdfreaderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrariesRoutingModule { }
