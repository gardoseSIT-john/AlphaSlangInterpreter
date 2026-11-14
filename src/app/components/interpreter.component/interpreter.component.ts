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
  private service = inject(InterpreterService);
  private recognition: any;

  mode = signal<'interpret' | 'slangify'>('interpret');
  input = signal('');
  output = signal('');
  matches = signal<string[]>([]);
  loading = signal(false);
  listening = signal(false);
  error = signal('');

  voiceSupported = !!(
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
  );

  setMode(m: 'interpret' | 'slangify') {
    this.mode.set(m);
    this.output.set('');
    this.matches.set([]);
  }

  run() {
    const text = this.input().trim();
    if (!text) return;

    this.loading.set(true);
    this.error.set('');

    const call =
      this.mode() === 'interpret'
        ? this.service.interpret(text)
        : this.service.slangify(text);

    call.subscribe({
      next: (res) => {
        this.output.set(res.translation);
        this.matches.set(res.matches ?? []);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('Something went wrong. Try again.');
        this.loading.set(false);
      },
    });
  }

  toggleVoice() {
    if (this.listening()) {
      this.recognition?.stop();
      return;
    }
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    this.recognition = new SR();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = true;
    this.recognition.continuous = false;

    this.recognition.onresult = (e: any) => {
      let t = '';
      for (let i = 0; i < e.results.length; i++) t += e.results[i][0].transcript;
      this.input.set(t);
    };
    this.recognition.onend = () => {
      this.listening.set(false);
      if (this.input().trim()) this.run(); // voice -> text -> interpretation
    };
    this.recognition.onerror = (e: any) => {
      this.listening.set(false);
      this.error.set(`Mic error: ${e.error}`);
    };

    this.error.set('');
    this.recognition.start();
    this.listening.set(true);
  }

  clear() {
    this.input.set('');
    this.output.set('');
    this.matches.set([]);
    this.error.set('');
  }
}