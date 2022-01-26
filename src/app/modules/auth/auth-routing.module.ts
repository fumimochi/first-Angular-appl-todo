import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutesData } from 'src/app/core/routes';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: RoutesData.AppEnum.CREATE,
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
