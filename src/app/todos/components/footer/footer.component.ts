import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import {map} from 'rxjs/operators';
import { FilterEnum } from '../types/filter.enum';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  noTodosClass$:Observable<boolean>;
  activeCount$:Observable<number>;
  itemsLeftText$:Observable<string>;
  filterEnum = FilterEnum;
  filter$ :Observable<FilterEnum>;

  constructor(private todosService:TodoService) {
    this.noTodosClass$ = this.todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );
    this.activeCount$ = this.todosService.todos$.pipe(
      map((todos) => todos.filter((todo) => todo.isCompleted).length)
    );

    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item${activeCount !== 1 ? 's' : ''} left`)
    );
    this.filter$ =this.todosService.filter$;
  
  }

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }
}
