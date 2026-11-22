import { Component,inject,signal } from '@angular/core';
import { AlphaTermsService } from '../alpha-terms-service';
import {FormsModule,FormBuilder,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  imports: [FormsModule,ReactiveFormsModule],
  selector: 'app-dictionary-display-component',
  styleUrl: './dictionary-display-component.css',
  templateUrl: './dictionary-display-component.html',
})
export class DictionaryDisplayComponent {

  //MongoDB Attempt
  private formBuilder = inject(FormBuilder);
  alphaSlangService = inject(AlphaTermsService);

  ngOnInit(): void{
    console.log("Waga");
    this.alphaSlangService.fetchTerms();
  }


  slangtermForm = this.formBuilder.nonNullable.group({
    term: ['', Validators.required],
    description: ['', Validators.required],
    example: ['', Validators.required],
    dateOfOrigin: ['', Validators.required],
  });

  onSubmit(){
    if(this.slangtermForm.valid){
      this.alphaSlangService.saveTerms(this.slangtermForm.getRawValue()).subscribe(() =>{
        this.alphaSlangService.fetchTerms();
        this.slangtermForm.reset();
        console.log();
      })
    }
  }





  //Old stuff
  alphaSlang = inject(AlphaTermsService);
  searchTerm = signal('');
  showSearch = signal(false);
  


  toggleSearch(){
    this.showSearch.set(!this.showSearch());
  }

}
