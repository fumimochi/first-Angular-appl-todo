import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TodosItemComponent } from '../../components/todos-item/todos-item.component';
import { TodosItemsComponent } from '../../components/todos-items/todos-items.component';
import { TodosComponent } from '../../components/todos/todos.component';
import { PagessRoutingModule } from './pagess-routing.module';
import { PagessComponent } from './pagess.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodosItemsComponent,
    TodosItemComponent,
    PagessComponent,
  ],
  imports: [CommonModule, PagessRoutingModule],
})
export class PagesModule {}
