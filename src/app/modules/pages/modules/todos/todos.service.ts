import { Injectable } from '@angular/core';

import { PagesModels } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  public todos: PagesModels.Todo.ITodo[] = [];

  public addTodo(todo: PagesModels.Todo.ITodo) {
    todo.content.length != 0
      ? this.todos.unshift(todo)
      : console.error('Expected any symbol in input');
  }

  public removeTodo(todo: PagesModels.Todo.ITodo) {
    const idx = this.todos.indexOf(todo);
    this.todos.splice(idx, 1);
  }

  public makeDone(todo: PagesModels.Todo.ITodo) {
    const neededTodo = this.todos.find((i) => i == todo);
    neededTodo!.done = true;
  }
}
