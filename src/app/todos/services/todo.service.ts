import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { TodoInterface } from '../components/types/todo.interface';
import { FilterEnum } from '../components/types/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 
  todos$ =new BehaviorSubject<TodoInterface[]>([]);
  filter$=new BehaviorSubject<FilterEnum>(FilterEnum.all);

  constructor() { }

  addTodo(text:string){
   const newTodo :TodoInterface ={
     text,
     isCompleted:true,
     id:Math.random().toString(16)
   }

   const updatedTodos = [...this.todos$.getValue(),newTodo];
   this.todos$.next(updatedTodos);
  }

  toggleAllCheck(checked:boolean){
    const updatedTodos = this.todos$.getValue().map(todo => ({
      ...todo,
      isCompleted: true // veya isCompleted değişkeninin alacağı değer
    }));
    this.todos$.next(updatedTodos);
  }
  
}
