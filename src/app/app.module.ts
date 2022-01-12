import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { TodosItemComponent } from './components/todos-item/todos-item.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [AppComponent, ...COMPONENTS, TodosItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
