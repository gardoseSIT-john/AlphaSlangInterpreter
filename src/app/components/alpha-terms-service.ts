import { Service, Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlphaTermsService {

    private _alphaTerms = signal([
        {
            term: "Rizz",
            description: "Charisma, especially with flirting. He's smooth with people.",
            example: "He's got rizz."

        },
        {
            term: "Mid",
            description: "Boring, mediocre. It wasn't bad, but not good either.",
            example: "That movie was mid."
        },
        {
            term: "Slaps",
            description: "Calling something really good. Mostly used in music.",
            example: "That song slaps."
        },
        {
            term: "Fire",
            description: "Calling something really good.",
            example: "That outfit is fire."
        },
        {
            term: "No Cap",
            description: "Synonym of 'Honestly/I swear",
            example: "No cap, that was the best movie I've ever seen."
        },
        {
            term:"Cap",
            description: "Calling something a lie or false.",
            example: "That story is cap."
        },
        {
            term:"Bet",
            description: "Synonym of 'Okay' or 'Sure'. Used for agreement or agreeing to do something.",
            example: "Bet, I'll be there in 10 minutes."
        }

    ])


    terms = this._alphaTerms.asReadonly();


}
