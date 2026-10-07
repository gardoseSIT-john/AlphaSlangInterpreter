import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interpretation-llm',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './interpretation-llm-component.html',
  styleUrls: ['./interpretation-llm-component.css']
})
export class InterpretationLLMComponent {
  inputText: string = '';
  displayText: string = '';

  onSubmit(): void {
    this.displayText = this.inputText.toUpperCase();
  }
}