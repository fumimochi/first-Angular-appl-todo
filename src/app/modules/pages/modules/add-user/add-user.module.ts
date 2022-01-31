import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddUserRoutingModule } from "./add-user-routing.module";

import { AddUserComponent } from "./add-user.component";

@NgModule({
    declarations: [AddUserComponent],
    imports: [
        CommonModule,
        AddUserRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AddUserModule { }