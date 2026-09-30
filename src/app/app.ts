import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DictionaryDisplayComponent} from './components/dictionary-display-component/dictionary-display-component';
import {TopBar} from './components/top-bar/top-bar';

@Component({
  imports: [RouterOutlet,DictionaryDisplayComponent,TopBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AlphaSlangInterpreter');
}
