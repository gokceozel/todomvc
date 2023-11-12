import { NgModule } from "@angular/core";
import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/todos/components/header/header.component';
import { TodoService } from "./services/todo.service";



const routes: Routes=[
  {
    path:'',
    component:TodosComponent,
  }
]

@NgModule({
  declarations:[
      TodosComponent,
      HeaderComponent
  ],
  imports:[RouterModule.forChild(routes)],
  providers:[TodoService]
})
export class TodosModule{

}