import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/modules/pages/modules/todos/todos.service';
import { UsersService } from 'src/app/core/services/users.service';

export interface ITodo {
  content: string;
  done: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  users = [];

  constructor(
    private readonly todoService: TodoService,
    private readonly usersService: UsersService
  ) {}

  public todos = this.todoService.todos;
  public addTodo = this.todoService.addTodo;

  public loadUsers() {
    this.usersService.getAllUsers().subscribe((response) => {
      console.log(response);
    });
  }
}
