import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCreateComponent } from './create/app-create.component';
import { AppSearchComponent } from './search/app-search.component';

const routes: Routes = [
  { path: "", component: AppSearchComponent },
  { path: "search", component: AppSearchComponent },
  { path: "create", component: AppCreateComponent},
  { path: "**", redirectTo: '/search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
