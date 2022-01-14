import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagessComponent } from './pagess.component';

const routes: Routes = [
  {
    path: '',
    component: PagessComponent,
    children: [
      { path: '', redirectTo: 'todos', pathMatch: 'full' },
      {
        path: 'todos',
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
export class PagessRoutingModule {}
