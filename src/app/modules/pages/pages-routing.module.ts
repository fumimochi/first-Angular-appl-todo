import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesData } from 'src/app/core/routes';

import { AppGuard } from 'src/app/core/services/app-guard.service';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'todos', pathMatch: 'full' },
      {
        path: RoutesData.AppEnum.TODOS,

        loadChildren: () =>
          import('./modules/todos/todos.module').then((m) => m.TodosModule),
      },
      {
        path: RoutesData.AppEnum.USERS,

        loadChildren: () =>
          import('./modules/userManagement/user-management.module').then(
            (n) => n.UserManagementModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
