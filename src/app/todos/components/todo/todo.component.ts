import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit
{
  @Input('todo') todoProps!: TodoInterface ;
  @Input('isEditing') isEditingProps! :boolean ;
  @Output('setEditingId') setEditingIdEvent:EventEmitter<string | null> =new EventEmitter();
  editingText:string ='';

  ngOnInit(): void {
    this.editingText= this.todoProps.text;
  }

  constructor(private todoService: TodoService) {}

  setTodoInEditMode():void
  {
    this.setEditingIdEvent.emit(this.todoProps.id);
  }

  removeTodo():void
  {
    this.todoService.removeTodo(this.todoProps.id);
  }

  toggleTodo():void
  {

  }

  changeTodo():void
  {
   this.todoService.changeTodo(this.todoProps.id,this.editingText);
   this.setEditingIdEvent.emit(null);
  }

  changeText(event: Event) :void 
  {
    const value =(event.target as HTMLInputElement).value;
    this.editingText=value;
  }
}
