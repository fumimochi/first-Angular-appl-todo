import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { TodoService } from '../../services/todos.service';

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

  users = [];

  constructor(private service: TodoService, private usersService: UsersService) { }

  public todos = this.service.todos;
  public addTodo = this.service.addTodo;

  loadUsers() {
    this.usersService
      .getUsers()
      .subscribe(response => {
        console.log(response);
      });
  }

}
