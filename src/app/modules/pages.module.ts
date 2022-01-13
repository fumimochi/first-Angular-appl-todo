import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TodosItemComponent } from "../components/todos-item/todos-item.component";
import { TodosItemsComponent } from "../components/todos-items/todos-items.component"; 
import { TodosComponent } from "../components/todos/todos.component"; 
import { UsersService } from "../services/users.service";
import { TodosRoutingModule } from "./todos-routing.module";

@NgModule({
    declarations: [
        TodosComponent, 
        TodosItemsComponent, 
        TodosItemComponent
    ],
    imports: [
        CommonModule,
        TodosRoutingModule
    ],
    providers: [UsersService]
})
export class PagesModule {

}