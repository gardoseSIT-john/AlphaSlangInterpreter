import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InterpreterService } from '../interpreter.service';

@Component({
  selector: 'app-interpreter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './interpreter.component.html',
  styleUrl: './interpreter.component.css',
})
export class InterpreterComponent {
  private interpreter = inject(InterpreterService);

  input = signal('');
  output = signal('');
  matches = signal<string[]>([]);
  loading = signal(false);
  error = signal('');

  interpret() {
    const text = this.input().trim();
    if (!text) return;

    this.loading.set(true);
    this.error.set('');

    this.interpreter.interpret(text).subscribe({
      next: (res) => {
        console.log('[Front End] Interpretation Result:', res);
        this.output.set(res.translation);
        this.matches.set(res.matches ?? []);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('[Front End] Interpret failed:', err);
        this.error.set('Could not interpret that. Try again.');
        this.loading.set(false);
      },
    });
  }

  clear() {
    this.input.set('');
    this.output.set('');
    this.matches.set([]);
    this.error.set('');
  }
}