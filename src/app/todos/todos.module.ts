import { NgModule } from "@angular/core";
import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/todos/components/header/header.component';
import { TodoService } from "src/app/todos/services/todo.service";
import { MainComponent } from 'src/app/todos/components/main/main.component';
import { CommonModule } from "@angular/common";

const routes: Routes=[
  {
    path:'',
    component:TodosComponent,
  }
]

@NgModule({
  declarations:[
      TodosComponent,
      HeaderComponent,
      MainComponent
  ],
  imports:[CommonModule, RouterModule.forChild(routes)],
  providers:[TodoService]
})
export class TodosModule{

}