import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [

    TodoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  //****Başlangıç komponenti***
  bootstrap: [TodoComponent]
})
export class AppModule { }
