import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesData } from './core/routes';

import { AuthGuard } from './core/services/auth-guard.service';
import { PagesGuard } from './core/services/pages-guard.service';

const todoRoutes: Routes = [
  {
    path: RoutesData.AppEnum.PAGES,
    canActivate: [PagesGuard],
    loadChildren: () =>
      import('./modules/pagess/pagess.module').then((n) => n.PagesModule),
  },
  {
    path: RoutesData.AppEnum.AUTH,
    /* TODO */
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(todoRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
