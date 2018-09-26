import { Component, OnInit } from '@angular/core';

interface TodoItem {
  name: String;
  done: Boolean;
}

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  newTodo: String = '';

  list: Array<TodoItem> = [
    { name: 'clean room', done: false },
    { name: 'make pancakes', done: false },
    { name: 'spend 3 hours on reddit', done: true }
  ];

  constructor() { }

  addTodo() {
    console.log('this.newTodo', this.newTodo);

    this.list.push({
      name: this.newTodo,
      done: false
    });

    this.newTodo = '';
  }

  ngOnInit() {
  }

}
