import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'Fold clothes',
      completed: false,
    },
    {
      task: 'Put clothes in dresser',
      completed: false,
    },
    {
      task: 'Relax',
      completed: false,
    },
    {
      task: 'Try to pet cat',
      completed: true,
    },
    {
      task: 'Pet dog',
      completed: false,
    },
    {
      task: 'Be Awesome',
      completed: false,
    },
  ];
  newTodo = '';
  addTodo(newTodo) {
    this.todos.push({
      task: newTodo,
      completed: false,
    });
    this.newTodo = '';
  }
  completedBtn(taskCompletedBtn) {
    taskCompletedBtn.completed = taskCompletedBtn.completed;
  }

  constructor() {}

  ngOnInit(): void {}
}
