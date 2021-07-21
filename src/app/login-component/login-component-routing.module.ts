import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [{path:"",component:LoginComponentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule,BrowserModule,FormsModule],
  exports: [RouterModule]
})
export class LoginComponentRoutingModule { }
