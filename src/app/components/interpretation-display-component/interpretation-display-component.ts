import { Component,signal,inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AlphaTermsService } from '../alpha-terms-service';


@Component({
  imports: [FormsModule],
  selector: 'app-interpretation-display-component',
  styleUrl: './interpretation-display-component.css',
  templateUrl: './interpretation-display-component.html',
})
export class InterpretationDisplayComponent {

  alphaSlang = inject(AlphaTermsService);
  /*
  What we need. Input from the user is stored actively but the function call must be
  triggered by a button click.(We are in the free tier. Keep it low.)



  */
  userInput = signal('');

  prepPrompt(){
    //
  }



}
