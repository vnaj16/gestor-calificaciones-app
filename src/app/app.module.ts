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
import { InfoCursoHomeComponent } from './info-curso-home/info-curso-home.component';
import {MatListModule} from '@angular/material/list';
import { TableEvaluacionesHomeComponent } from './table-evaluaciones-home/table-evaluaciones-home.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { FormCreateCourseComponent } from './form-create-course/form-create-course.component';
import {MatInputModule} from '@angular/material/input';
import { SelectCursoRegisterCycleComponent } from './select-curso-register-cycle/select-curso-register-cycle.component';
import { FormCreateEvaluationComponent } from './form-create-evaluation/form-create-evaluation.component';
import { TableEvaluacionesRegisterCycleComponent } from './table-evaluaciones-register-cycle/table-evaluaciones-register-cycle.component';



@NgModule({
  declarations: [
    AppComponent,
    SelectCicloHomeComponent,
    HomeComponent,
    PageRegisterGradeComponent,
    PageRegisterCycleComponent,
    SelectCursoHomeComponent,
    InfoCicloHomeComponent,
    FormCreateCycleComponent,
    InfoCursoHomeComponent,
    TableEvaluacionesHomeComponent,
    FormCreateCourseComponent,
    SelectCursoRegisterCycleComponent,
    FormCreateEvaluationComponent,
    TableEvaluacionesRegisterCycleComponent
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
    ReactiveFormsModule,
    MatListModule,
    MatTableModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
