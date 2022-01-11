import { Component } from '@angular/core';
import { TodoService } from './services/todos.service';

export interface ITodo {
  content: string
  done: boolean
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  constructor(private service: TodoService) { }

  public todos = this.service.todos;
  public addTodo = this.service.addTodo;

}
