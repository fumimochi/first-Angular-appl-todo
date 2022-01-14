import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TodoService } from "src/app/services/todos.service";
import { TodosItemComponent } from "../../components/todos-item/todos-item.component";
import { TodosItemsComponent } from "../../components/todos-items/todos-items.component"; 
import { TodosComponent } from "../../components/todos/todos.component"; 
import { UsersService } from "../../services/users.service";
import { PagessRoutingModule } from "./pagess-routing.module";

@NgModule({
    declarations: [
        TodosComponent, 
        TodosItemsComponent, 
        TodosItemComponent
    ],
    imports: [
        CommonModule,
        PagessRoutingModule
    ],
    providers: [UsersService, TodoService]
})
export class PagesModule {

}