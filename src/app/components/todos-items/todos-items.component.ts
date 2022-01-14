import { Component } from '@angular/core';
import { TodoService } from '../../core/services/todos.service';

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.scss'],
})
export class TodosItemsComponent {
  constructor(private readonly service: TodoService) {}

  public todos = this.service.todos;
}
