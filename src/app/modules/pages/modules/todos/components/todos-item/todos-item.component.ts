import { Component, Input } from '@angular/core';

import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss'],
})
export class TodosItemComponent {
  constructor(private readonly todoService: TodosService) {}

  @Input('todoItem')
  todo!: { content: string; done: boolean };

  public todos = this.todoService.todos;
  public removeTodo = this.todoService.removeTodo;
  public makeDone = this.todoService.makeDone;
}
