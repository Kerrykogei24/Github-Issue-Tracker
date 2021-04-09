import { FeatureTableComponent } from './feature-table/feature-table.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDataComponent } from './user-data/user-data.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from './repo/repo.component';


const routes: Routes = [
  { path: 'user-data', component:UserDataComponent },
  { path: 'repo', component:RepoComponent },
  { path: 'table', component:TableComponent},
  { path: 'form', component:FormComponent},
  { path: 'feature-table',component:FeatureTableComponent},
  { path: '', redirectTo:"/user-data", pathMatch:"full"},
  { path: '**', component:NotFoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }