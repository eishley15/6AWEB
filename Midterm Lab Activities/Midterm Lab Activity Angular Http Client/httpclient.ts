import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Todo } from './todo.model';



@Injectable({
  providedIn: 'root',
})

export class Httpclient {
  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  private todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
    const cachedUsers = localStorage.getItem('users');

    if (cachedUsers) {
      return of(JSON.parse(cachedUsers));
    }

    return this.http.get<User[]>(this.userUrl).pipe(tap(users => localStorage.setItem('users', JSON.stringify(users))));
  }

  getTodosRemotely(): Observable<Todo[]> {
    const cachedTodos = localStorage.getItem('todos');

    if (cachedTodos) {
      return of(JSON.parse(cachedTodos));
    }

    return this.http.get<Todo[]>(this.todosUrl).pipe(tap(todos => localStorage.setItem('todos', JSON.stringify(todos))));
  }
}
