import { Component } from '@angular/core';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.scss'],
})
export class TodosItemsComponent {
  constructor(private readonly service: TodosService) {}

  public todos = this.service.todos;
}
