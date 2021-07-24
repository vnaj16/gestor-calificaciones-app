import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
import { SelectCursoHomeComponent } from './select-curso-home/select-curso-home.component';
import { InfoCicloHomeComponent } from './info-ciclo-home/info-ciclo-home.component';
import { FormCreateCycleComponent } from './form-create-cycle/form-create-cycle.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectCicloHomeComponent,
    HomeComponent,
    PageRegisterGradeComponent,
    PageRegisterCycleComponent,
    SelectCursoHomeComponent,
    InfoCicloHomeComponent,
    FormCreateCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
