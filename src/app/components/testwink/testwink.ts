import { Component,OnInit,signal } from '@angular/core';
import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-web-model';
import { it } from 'node:test';



@Component({
  imports: [],
  selector: 'app-testwink',
  styleUrl: './testwink.css',
  templateUrl: './testwink.html',
})
export class Testwink {
  

nlp = winkNLP(model);

its = this.nlp.its;

as = this.nlp.as;


//Testhing..
testText = "This are the active... okay, reached this stage minus the reach the next stage.";
doc = this.nlp.readDoc(this.testText);

renderMe = signal(this.doc.out())
tokenizedRender = signal(this.doc.tokens().out(this.its.type,this.as.freqTable))
entitiesRender = signal(this.doc.entities().out(this.its.detail));


}
