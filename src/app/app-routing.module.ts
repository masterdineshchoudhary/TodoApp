import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './Components/todos/todos.component';
import { ReactiveFormsComponent } from './Components/reactive-forms/reactive-forms.component';
import { ApexChartsComponent } from './Components/apex-charts/apex-charts.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'todo', component: TodosComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'apex-charts', component: ApexChartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
