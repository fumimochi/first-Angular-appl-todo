import { Component, Input } from '@angular/core';
import { TodoService } from '../../core/services/todos.service';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss'],
})
export class TodosItemComponent {
  constructor(private readonly service: TodoService) {}

  @Input('todoItem')
  todo!: { content: string; done: boolean };

  public todos = this.service.todos;
  public removeTodo = this.service.removeTodo;
  public makeDone = this.service.makeDone;
}
