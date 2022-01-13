import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponent } from "../auth/auth.component";
import { TodosRoutingModule } from "./todos-routing.module";

@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule,
        TodosRoutingModule
    ],
    providers: []
})
export class AuthModule {
}