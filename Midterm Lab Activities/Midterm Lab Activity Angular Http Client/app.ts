import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { Todo } from './todo.model';
import { SlicePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SlicePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('httpclient-demo');
  httpusers: User[] = [];
  httptodos: Todo[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    this.httpClient.getUsersRemotely().subscribe((data) => {this.httpusers = data;});

    this.httpClient.getTodosRemotely().subscribe((data) => {this.httptodos = data.slice(0, 5);});
  }
}
