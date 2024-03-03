import { Component } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor() {
    this.todos = [
      {
        no: 1,
        title: 'title1',
        description: 'description',
        completed: true,
      },
      {
        no: 2,
        title: 'title2',
        description: 'description',
        completed: false,
      },
      {
        no: 3,
        title: 'title3',
        description: 'description',
        completed: true,
      },
    ];
  }
}
