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

  changeFilter(filterName:FilterEnum)
  {
     this.filter$.next(filterName);
  }

  changeTodo(id:string, text:string):void
  {
    const updatedTodo = this.todos$.getValue().map( (todo)=> {
      if(todo.id ===id){
        return {
          ...todo,
          text
        }
      }
      return todo;
    });
    this.todos$.next(updatedTodo);
  }

  removeTodo(id:string):void{
    const updatedTodo = this.todos$.getValue()
                        .filter((todo)=> todo.id !==id);
    
    this.todos$.next(updatedTodo);
  }

  toggleTodo(id:string):void
  {
    const updated=this.todos$.getValue().map((todo)=>{
      if(todo.id===id){
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo;
    })
  }
}

