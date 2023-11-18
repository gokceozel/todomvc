import { NgModule } from "@angular/core";
import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/todos/components/header/header.component';
import { TodoService } from "src/app/todos/services/todo.service";
import { MainComponent } from 'src/app/todos/components/main/main.component';
import { CommonModule } from "@angular/common";
import { TodoComponent } from 'src/app/todos/components/todo/todo.component';
import { FooterComponent } from 'src/app/todos/components/footer/footer.component';

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
      MainComponent,
      TodoComponent,
      FooterComponent
  ],
  imports:[CommonModule, RouterModule.forChild(routes)],
  providers:[TodoService]
})
export class TodosModule{

}