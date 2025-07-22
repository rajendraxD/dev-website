import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from "./pages/dashboard/dashboard";
import { Footer } from "./shared/reusableComponent/footer/footer";
import { Header } from './shared/reusableComponent/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard,Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('indian-oil');
}
