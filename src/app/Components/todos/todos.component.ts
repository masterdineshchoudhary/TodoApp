import { Component, OnInit } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  constructor() {}

  ngOnInit(): void {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todos.push({
        id: Math.floor(Math.random() * 100000),
        title: this.newTodoTitle,
        completed: false,
      });
      this.newTodoTitle = '';
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  toggleTodo(todo: Todo): void {
    todo.completed = !todo.completed;
    todo.completed = !todo.completed;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
