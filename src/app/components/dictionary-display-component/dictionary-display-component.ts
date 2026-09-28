import { Component,inject } from '@angular/core';
import { AlphaTermsService } from '../alpha-terms-service';

@Component({
  imports: [],
  selector: 'app-dictionary-display-component',
  styleUrl: './dictionary-display-component.css',
  templateUrl: './dictionary-display-component.html',
})
export class DictionaryDisplayComponent {
  alphaSlang = inject(AlphaTermsService);

}
