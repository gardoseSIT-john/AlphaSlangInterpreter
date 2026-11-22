import { Routes } from '@angular/router';
import { InterpreterComponent } from './components/interpreter.component/interpreter.component';
import { DictionaryDisplayComponent } from './components/dictionary-display-component/dictionary-display-component';

export const routes: Routes = [
  { path: '', redirectTo: 'interpreter', pathMatch: 'full' },
  { path: 'interpreter', component: InterpreterComponent },
  { path: 'dictionary', component: DictionaryDisplayComponent },
  { path: '**', redirectTo: 'interpreter' },
];
