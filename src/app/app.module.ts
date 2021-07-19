import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectCicloHomeComponent } from './select-ciclo-home/select-ciclo-home.component';
import { HomeComponent } from './home/home.component';
import { PageRegisterGradeComponent } from './page-register-grade/page-register-grade.component';
import { PageRegisterCycleComponent } from './page-register-cycle/page-register-cycle.component';
import { SidebarModule } from 'ng-sidebar';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SelectCicloHomeComponent,
    HomeComponent,
    PageRegisterGradeComponent,
    PageRegisterCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
