import { Component } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import {Observable, combineLatest} from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { FilterEnum } from '../types/filter.enum';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-todos-main',
  templateUrl: './main.component.html'
})
export class MainComponent {
  visibleTodos$: Observable<TodoInterface[]>;
  noTodoClass$:Observable<boolean>;
  isAllTodosSelected$:Observable<boolean>;
 
  constructor(private todosService:TodoService) {
    this.noTodoClass$= this.todosService.todos$.pipe(map((todos)=> todos.length ===0));
    this.isAllTodosSelected$ = this.todosService.todos$.pipe(
      map(todos => todos.every(todo => todo.isCompleted))
    );

    this.visibleTodos$ = combineLatest(
      this.todosService.todos$,
      this.todosService.filter$
    ).pipe(
      map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
         if(filter === FilterEnum.active){
           return todos.filter( (todo)=> ! todo.isCompleted);
         }
         else if(filter ===FilterEnum.completed){
           return todos.filter((todo)=> todo.isCompleted);
         }
        return todos;
      })
    );
  }


  toggleAllTodos(event:Event){
   const target=event.target as HTMLInputElement;
   this.todosService.toggleAllCheck(target.checked);
  }
}
