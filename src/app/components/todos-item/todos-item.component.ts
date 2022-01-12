import { Component, Input } from '@angular/core';
import { TodoService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent {

  constructor(private readonly service: TodoService) {}

  @Input('todoItem')
  todo!: { content: string; done: boolean; };
  // ПРОСИДЕЛ 1.5 ЧАСА НЕ ВЫКУПАЯ СИНТАКСИС !:

  public todos = this.service.todos;
  public removeTodo = this.service.removeTodo;
  public makeDone = this.service.makeDone;

}
