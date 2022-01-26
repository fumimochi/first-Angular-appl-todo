import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UserManagementComponent } from "./user-management.component";
import { UserManagementRoutingModule } from "./user-managment-routing.module";

@NgModule({
    declarations: [UserManagementComponent],
    imports: [
        CommonModule, 
        UserManagementRoutingModule, 
        FormsModule, 
        ReactiveFormsModule
    ],
}) 
export class UserManagementModule {


 }