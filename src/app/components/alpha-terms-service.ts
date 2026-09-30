import { Service, Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlphaTermsService {

    private _alphaTerms = signal([
        {
            term: 'Gyatt',
            description: 'Expression when seeing someone with nice buttocks',
            example: 'Did you see that post? Gyatt!',
            dateOfOrigin: '2021'
        },
        {
            term: 'Chopped',
            description: 'Ugly or unattractive',
            example: "Your boyfriend's chopped.",
            dateOfOrigin: '2023'
        },
        {
            term: "Unc",
            description: "Short for uncle; used to describe an older person or someone acting out-of-touch/old.",
            example: "Look at him using old memes, he's basically an unc.",
            dateOfOrigin: "2024"
        },
        {
            term: "Mog",
            description: "To completely outshine someone in appearance, height, style, or physical presence.",
            example: "He walked into the room and totally mogged everyone there.",
            dateOfOrigin: "2023"
        },
        {
            term: 'Brainrot',
            description: 'No-brainer, low-effort, repetitive short videos',
            example: 'Scrolling endlessly through reels left me with a terminal brainrot',
            dateOfOrigin: '2023'
        },
        {
            term: 'Mewing',
            description: 'Pressing the tongue against the roof of the mouth to define the jawline',
            example: 'Everyone thought he was listening to the professor but he was just busy mewing.',
            dateOfOrigin: '2012'
        },
        {
            term: 'Looksmaxxing',
            description: 'Maximizing physical appearance and style',
            example: "He's been hitting the gym and fixing his posture for his looksmaxxing journey.",
            dateOfOrigin: '2015'
        },
        {
            term: '6-7',
            description: 'Nonsensical meme reaction with no real meaning (originated 2024)',
            example: "Teacher: What's 3 plus 4? Kid: SIX SEVEN!!",
            dateOfOrigin: '2024'
        },
        {
            term: 'Aura',
            description: 'When you do something cool, you gain aura. When you do something uncool, you lose aura.',
            example: 'Tripping in front of everyone instantly lost him -500 aura.',
            dateOfOrigin: '2023'
        },
        {
            term: 'Rizz',
            description: 'Charisma, especially with flirting. He\'s smooth with people.',
            example: "He's got rizz.",
            dateOfOrigin: '2021'
        },
        {
            term: 'Mid',
            description: "Boring, mediocre. It wasn't bad, but not good either.",
            example: 'That movie was mid.',
            dateOfOrigin: '2018'
        },
        {
            term: 'Slaps',
            description: 'Calling something really good. Mostly used in music.',
            example: 'That song slaps.',
            dateOfOrigin: '2000s'
        },
        {
            term: 'Fire',
            description: 'Calling something really good.',
            example: 'That outfit is fire.',
            dateOfOrigin: '1990s'
        },
        {
            term: 'No Cap',
            description: "Synonym of 'Honestly/I swear'.",
            example: 'No cap, that was the best movie I\'ve ever seen.',
            dateOfOrigin: '2017'
        },
        {
            term: 'Cap',
            description: 'Calling something a lie or false.',
            example: 'That story is cap.',
            dateOfOrigin: '2017'
        },
        {
            term: 'Bet',
            description: "Synonym of 'Okay' or 'Sure'. Used for agreement or agreeing to do something.",
            example: "Bet, I'll be there in 10 minutes.",
            dateOfOrigin: '1990s'
        },
        {
            term: 'Skibidi',
            description: 'Cool, bad, or wild depending on context; derived from Skibidi Toilet.',
            example: 'That new game mode is totally skibidi.',
            dateOfOrigin: '2023'
        },
        {
            term: 'Sigma',
            description: "A popular, cool, and independent 'lone wolf'.",
            example: "He doesn't care about trends; he's pure sigma.",
            dateOfOrigin: '2021'
        },
        {
            term: "Bussin'",
            description: 'Exceptionally good, especially food.',
            example: "This burger is straight-up bussin'.",
            dateOfOrigin: '2010s'
        },
        {
            term: 'Main Character',
            description: 'Acting like the central protagonist of a situation.',
            example: 'She walked through the hallway like the main character.',
            dateOfOrigin: '2020'
        },
        {
            term: 'Beta',
            description: 'Weak, submissive, or non-dominant.',
            example: "Don't be so beta, stand up for yourself.",
            dateOfOrigin: '2000s'
        },
        {
            term: 'Womp Womp',
            description: "Sarcastic response used to dismiss someone's complaining.",
            example: 'You lost your streak? Womp womp.',
            dateOfOrigin: '2023'
        },
        {
            term: "Crash Out",
            description: "To lose your temper completely, engage in self-destructive behavior, or explode in anger.",
            example: "He got so mad at the video game he was about to crash out.",
            dateOfOrigin: "2023"
        },
        {
            term: 'Delulu',
            description: 'Delusional; holding unrealistically optimistic beliefs.',
            example: "Thinking he'll text back after three weeks is total delulu.",
            dateOfOrigin: '2023'
        },
        {
            term: 'Let Him Cook',
            description: 'To let someone do their thing, perform, or make a point.',
            example: 'Wait, hold on, let him cook—he has a good point.',
            dateOfOrigin: '2022'
        },
        {
            term: "Glazing",
            description: "Overly complimenting, hyping, or sucking up to someone in an embarrassing way.",
            example: "Stop glazing him, he only made one basic basket.",
            dateOfOrigin: "2022"
        },
        {
            term: "Cooked",
            description: "Done for, doomed, or completely ruined.",
            example: "I didn't study for the exam, I'm absolutely cooked.",
            dateOfOrigin: "2023"
        },
        {
            term: 'Sus',
            description: 'Suspicious or shady.',
            example: 'Why is he acting so sus all of a sudden?',
            dateOfOrigin: '2018'
        },
        {
            term: 'Ohio',
            description: 'Used to describe anything weird, cursed, or chaotic.',
            example: 'Only in Ohio would something like that happen.',
            dateOfOrigin: '2022'
        },
        {
            term: "Side Quest",
            description: "A random, unexpected, or completely unneeded activity detour from your main plan.",
            example: "We went to get milk and ended up going on a 3-hour side quest at the mall.",
            dateOfOrigin: "2022"
        },
        {
            term: "Ate / Left No Crumbs",
            description: "Executed something perfectly, especially a outfit, performance, or response.",
            example: "She wore that outfit and completely ate, left no crumbs.",
            dateOfOrigin: "2021"
        },

    ])


    terms = this._alphaTerms.asReadonly();


}
