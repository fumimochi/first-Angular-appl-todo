import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from 'src/app/core/services/app-guard.service';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'todos', pathMatch: 'full' },
      {
        path: 'todos',
        canActivate: [AppGuard],
        loadChildren: () =>
          import('./modules/todos/todos.module').then((m) => m.TodosModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
