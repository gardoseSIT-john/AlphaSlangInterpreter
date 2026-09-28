import { Service, Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlphaTermsService {

    private _alphaTerms = signal([
        {
            term: "W",
            description: "Shorthand for win"

        },
        {
            term: "L",
            description: "Shorthand for loss or losing"
        },
        {
            term: "L+ratio",
            description: "Response to a comment or action on the internet that is particularly bad"
        },
        {
            term: "Dank",
            description: "A term used to describe something that is of high quality or particularly good"
        }

    ])

    terms = this._alphaTerms.asReadonly();


}
