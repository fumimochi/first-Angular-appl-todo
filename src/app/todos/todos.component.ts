import { Component, OnInit } from '@angular/core';

export interface Todo {
  content: string
  done: boolean
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo) {
    todo.content.length != 0 ? this.todos.unshift(todo) : console.error('Expected any symbol in input');
  }

  removeTodo(todo: Todo) {
    const idx = this.todos.indexOf(todo);
    this.todos.splice(idx, 1);
  }

  makeDone(todo: Todo) {
    const neededTodo = this.todos.find(i => i == todo);
    neededTodo!.done = true;
  }

}
