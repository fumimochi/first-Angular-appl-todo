import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/modules/pages/modules/todos/todos.service';
import { UsersService } from 'src/app/core/services/users.service';
import { FormControl, Validators } from '@angular/forms';

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

  public control = new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
  ]);

  constructor(
    private readonly todoService: TodosService,
    private readonly usersService: UsersService
  ) {}

  public todos = this.todoService.todos;

  public loadUsers() {
    this.usersService.getAllUsers().subscribe((response) => {
      console.log(response);
    });
  }

  public addTodo() {
    const content: string = this.control.value;

    this.todoService.addTodo({ content, done: false });

    this.control.reset();
  }
}
