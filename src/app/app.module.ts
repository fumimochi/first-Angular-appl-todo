import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { TodoService } from './services/todos.service';
import { PagesGuard } from './services/pages-guard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [TodoService, AuthService, AuthGuard, PagesGuard],
  bootstrap: [AppComponent],
}) 
export class AppModule {}
