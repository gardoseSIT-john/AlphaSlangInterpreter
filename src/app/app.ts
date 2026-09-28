import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DictionaryDisplayComponent} from './components/dictionary-display-component/dictionary-display-component';

@Component({
  imports: [RouterOutlet,DictionaryDisplayComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AlphaSlangInterpreter');
}
