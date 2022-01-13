import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from '../components/todos/todos.component';
import { AuthGuard } from '../services/auth-guard.service';

const todoRoutes: Routes = [
  { path: '', component: TodosComponent, canActivate: [AuthGuard] },
  {
    path: 'auth',
    /* TODO */
    // canActivate: [AuthGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(todoRoutes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
