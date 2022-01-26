import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutesData } from './core/routes';
import { AppGuard } from './core/services/app-guard.service';

const todoRoutes: Routes = [
  {
    path: RoutesData.AppEnum.PAGES,
    loadChildren: () =>
      import('./modules/pages/pages.module').then((n) => n.PagesModule),
    canActivate: [AppGuard],
  },
  {
    path: RoutesData.AppEnum.AUTH,
    canActivate: [AppGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(todoRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
