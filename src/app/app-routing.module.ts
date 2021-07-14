import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageRegisterCycleComponent } from './page-register-cycle/page-register-cycle.component';
import { PageRegisterGradeComponent } from './page-register-grade/page-register-grade.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register-grade', component: PageRegisterGradeComponent},
  { path: 'register-cycle', component: PageRegisterCycleComponent},
  { path: 'weighted-calculator', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
