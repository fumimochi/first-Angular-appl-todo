import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodosComponent } from "src/app/components/todos/todos.component";
import { PagessComponent } from "./pagess.component";

const routes: Routes = [{ path: '', component: TodosComponent }]; 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagessRoutingModule { }