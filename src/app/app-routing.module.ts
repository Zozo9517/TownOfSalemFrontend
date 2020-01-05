import { AnswerComponent } from './answer/answer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authGuard';


const routes: Routes = [
  {
  path: '',
  component: AnswerComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
