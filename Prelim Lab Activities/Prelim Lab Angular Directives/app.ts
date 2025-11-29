import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-routing-lab');
}