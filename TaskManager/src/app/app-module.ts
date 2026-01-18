import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { TaskList } from './task-list/task-list';
import { TaskForm } from './task-form/task-form';

@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    TaskList,
    TaskForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
