import { Injectable } from '@angular/core';

import { ITodo } from './todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: ITodo[] = [];

  public addTodo(todo: ITodo) {
    todo.content.length != 0
      ? this.todos.unshift(todo)
      : console.error('Expected any symbol in input');
  }

  public removeTodo(todo: ITodo) {
    const idx = this.todos.indexOf(todo);
    this.todos.splice(idx, 1);
  }

  public makeDone(todo: ITodo) {
    const neededTodo = this.todos.find((i) => i == todo);
    neededTodo!.done = true;
  }
}
