import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';
import { PagesGuard } from './services/pages-guard.service';

const todoRoutes: Routes = [
  { 
    path: '', 
    canActivate: [PagesGuard],
    loadChildren: () => import('./modules/pagess/pagess.module').then((n) => n.PagesModule)
  },
  {
    path: 'auth',
    /* TODO */
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(todoRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
