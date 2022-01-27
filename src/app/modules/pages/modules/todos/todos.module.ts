import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodosItemsComponent } from './components/todos-items/todos-items.component';
import { TodosItemComponent } from './components/todos-item/todos-item.component';

@NgModule({
  declarations: [TodosComponent, TodosItemsComponent, TodosItemComponent],
  imports: [CommonModule, TodosRoutingModule, FormsModule, ReactiveFormsModule],
})
export class TodosModule {}
