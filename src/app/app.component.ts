import { Component } from '@angular/core';
import { ApiService } from './service/api.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo [] = [];
  newTodo: string;
  cat: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  saveTodo(){
    if(!this.newTodo) {
       return alert('Por favor ingrese una tarea');
    }
    const todo = new Todo();
    todo.task = this.newTodo;
    todo.completed = true;
    this.todos.push(todo);
    this.newTodo = '';
  }
  completeTodo(id: number){
    this.todos[id].completed = !this.todos[id].completed;
  }
  removeTodo(id: number){
    this.todos = this.todos.filter((v,i)=> i !== id);
  }

  async callApi(){
    this.apiService.index().subscribe((response: any) => {
      this.cat = response[0].url;
    })

  }
}
