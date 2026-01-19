import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { TaskList } from './components/task-list/task-list';
import { TaskForm } from './components/task-form/task-form';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';


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
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
    ],
  bootstrap: [App]
})
export class AppModule { }
