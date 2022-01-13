import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "../auth/auth.component";
import { TodosComponent } from "../components/todos/todos.component";
import { AuthGuard } from "../services/auth-guard.service";

const todoRoutes: Routes = [
    { path: '', component: TodosComponent, canActivate: [AuthGuard] },
    { path: 'auth', component: AuthComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(todoRoutes)],
    exports: [RouterModule]
})
export class TodosRoutingModule {

}