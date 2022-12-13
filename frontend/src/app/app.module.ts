import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './components/users/users.component';
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {RouterModule, Routes} from "@angular/router";
import { AdduserComponent } from './components/adduser/adduser.component';
import {MatInputModule} from "@angular/material/input";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user/add',
    component: AdduserComponent
  },
  {
    path: 'user/list',
    component: UsersComponent
  },
  {
    path: 'user',
    component: UsersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
