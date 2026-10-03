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

        // 2026

        {
            term: "Aura Farming",
            description: "Trying to look cool for attention.",
            example: "Stop aura farming online.",
            dateOfOrigin: "2025"
        },
        {
            term: "Aura Points",
            description: "Imaginary points earned for doing something cool.",
            example: "That stunt earned him aura points.",
            dateOfOrigin: "2024"
        },
        {
            term: "NPC",
            description: "Someone acting robotic or lacking originality.",
            example: "He's acting like an NPC.",
            dateOfOrigin: "2020"
        },
        {
            term: "Fanum Tax",
            description: "Taking someone's food as a joke.",
            example: "Give me a fry, that's Fanum tax.",
            dateOfOrigin: "2023"
        },
        {
            term: "Larping",
            description: "Pretending to be something you're not.",
            example: "He's larping as a millionaire online.",
            dateOfOrigin: "2025"
        },
        {
            term: "Chud",
            description: "An annoying or unpleasant person.",
            example: "Don't be a chud.",
            dateOfOrigin: "2025"
        },
        {
            term: "Crine",
            description: "Misspelled crying; used when something is extremely funny.",
            example: "Bro, I'm crine right now.",
            dateOfOrigin: "2026"
        },
        {
            term: "Scuba",
            description: "Something smells bad.",
            example: "That locker room is scuba.",
            dateOfOrigin: "2026"
        },
        {
            term: "Quiet on the Creek",
            description: "Keep it private or don't spread it around.",
            example: "Quiet on the creek, don't tell anyone.",
            dateOfOrigin: "2026"
        },
        {
            term: "Bird",
            description: "A foolish or overly obsessed person.",
            example: "Stop acting like a bird.",
            dateOfOrigin: "2026"
        },
        {
            term: "Clanker",
            description: "An insult for a robot or AI.",
            example: "Okay clanker, calm down.",
            dateOfOrigin: "2026"
        },
        {
            term: "Huzz",
            description: "A slang term referring to attractive girls.",
            example: "The huzz showed up to the party.",
            dateOfOrigin: "2026"
        },
        {
            term: "W",
            description: "A win, success, or positive outcome.",
            example: "Passing the exam was a huge W.",
            dateOfOrigin: "2021"
        },
        {
            term: "L",
            description: "A loss, failure, or embarrassing outcome.",
            example: "Forgetting your homework is an L.",
            dateOfOrigin: "2021"
        },
        {
            term: "Based",
            description: "Being authentic and unapologetically yourself.",
            example: "That's a based opinion.",
            dateOfOrigin: "2021"
        },
        {
            term: "Bop",
            description: "A derogatory term for someone considered promiscuous.",
            example: "They're calling her a bop.",
            dateOfOrigin: "2024"
        },
        {
            term: "Yeet",
            description: "To throw something forcefully or express excitement.",
            example: "He yeeted the ball across the field.",
            dateOfOrigin: "2014"
        },
        {
            term: "Fam",
            description: "Close friends or trusted people.",
            example: "What's up, fam?",
            dateOfOrigin: "2014"
        },
        {
            term: "Dank",
            description: "Used to describe a very funny meme.",
            example: "That's a dank meme.",
            dateOfOrigin: "2015"
        },
        {
            term: "Lit",
            description: "Exciting, fun, or excellent.",
            example: "That party was lit.",
            dateOfOrigin: "2015"
        },
        {
            term: "Savage",
            description: "Fearlessly blunt or impressive.",
            example: "That comeback was savage.",
            dateOfOrigin: "2015"
        },
        {
            term: "Flex",
            description: "To show off or brag.",
            example: "He's flexing his new shoes.",
            dateOfOrigin: "2015"
        },
        {
            term: "GOAT",
            description: "Greatest Of All Time.",
            example: "LeBron is the GOAT.",
            dateOfOrigin: "2016"
        },
        {
            term: "Big Mood",
            description: "Something highly relatable.",
            example: "Sleeping all day is a big mood.",
            dateOfOrigin: "2016"
        },
        {
            term: "Tea",
            description: "Gossip or interesting information.",
            example: "Spill the tea.",
            dateOfOrigin: "2016"
        },
        {
            term: "Receipts",
            description: "Proof or evidence.",
            example: "Show the receipts.",
            dateOfOrigin: "2016"
        },
        {
            term: "Snatched",
            description: "Looking exceptionally good.",
            example: "That outfit is snatched.",
            dateOfOrigin: "2016"
        },
        {
            term: "Extra",
            description: "Overly dramatic or excessive.",
            example: "You're being extra today.",
            dateOfOrigin: "2016"
        },
        {
            term: "Lowkey",
            description: "Secretly or somewhat.",
            example: "I lowkey like that song.",
            dateOfOrigin: "2016"
        },
        {
            term: "Highkey",
            description: "Openly or strongly.",
            example: "I highkey want pizza.",
            dateOfOrigin: "2016"
        },
        {
            term: "Finsta",
            description: "A private or secondary Instagram account.",
            example: "She posted it on her finsta.",
            dateOfOrigin: "2016"
        },
        {
            term: "Thirsty",
            description: "Desperate for attention or affection.",
            example: "He's acting thirsty in the comments.",
            dateOfOrigin: "2016"
        },
        {
            term: "Stan",
            description: "A devoted fan.",
            example: "I stan that artist.",
            dateOfOrigin: "2017"
        },
        {
            term: "Big Yikes",
            description: "An expression of embarrassment or disapproval.",
            example: "He replied all to the email? Big yikes.",
            dateOfOrigin: "2018"
        },
        {
            term: "Sksksk",
            description: "A keyboard smash expressing excitement or laughter.",
            example: "Sksksk that's hilarious.",
            dateOfOrigin: "2019"
        },
        {
            term: "And I Oop",
            description: "A reaction to surprise or a mistake.",
            example: "And I oop, I dropped my phone.",
            dateOfOrigin: "2019"
        },
        {
            term: "Periodt",
            description: "Used to strongly emphasize a statement.",
            example: "That's the best song, periodt.",
            dateOfOrigin: "2019"
        },
        {
            term: "Simp",
            description: "Someone overly attentive to a crush.",
            example: "He's simping for her.",
            dateOfOrigin: "2019"
        },
        {
            term: "Cheugy",
            description: "Outdated or no longer trendy.",
            example: "That trend is cheugy now.",
            dateOfOrigin: "2020"
        },
        {
            term: "Hits Different",
            description: "Feels especially impactful or emotional.",
            example: "That song hits different at night.",
            dateOfOrigin: "2020"
        },
        {
            term: "POV",
            description: "A scenario presented from a specific perspective.",
            example: "POV: You're late for class.",
            dateOfOrigin: "2020"
        },
        {
            term: "Touch Grass",
            description: "Spend less time online and go outside.",
            example: "You need to touch grass.",
            dateOfOrigin: "2021"
        },
        {
            term: "Caught in 4K",
            description: "Caught doing something embarrassing with proof.",
            example: "He got caught in 4K cheating.",
            dateOfOrigin: "2021"
        },
        {
            term: "Ratio",
            description: "When a reply gets more attention than the original post.",
            example: "Your tweet got ratioed.",
            dateOfOrigin: "2021"
        },
        {
            term: "Corecore",
            description: "A style of emotional internet edits.",
            example: "That video is pure corecore.",
            dateOfOrigin: "2022"
        },
        {
            term: "Goblin Mode",
            description: "Being lazy, messy, or self-indulgent.",
            example: "I stayed home in goblin mode all weekend.",
            dateOfOrigin: "2022"
        },
        {
            term: 'Drip',
            description: 'Stylish clothing or fashion sense.',
            example: 'That outfit has serious drip.',
            dateOfOrigin: '2017'
        },
        {
            term: 'Green FN',
            description: 'Someone inexperienced, clueless, or easy to trick.',
            example: 'Bro fell for that scam, he is green FN.',
            dateOfOrigin: '2024'
        },
        {
            term: 'Lock In',
            description: 'To focus seriously on a task.',
            example: 'Finals are next week, time to lock in.',
            dateOfOrigin: '2023'
        },
        {
            term: 'Opp',
            description: 'An enemy, rival, or someone against you.',
            example: 'I saw one of my opps at the mall.',
            dateOfOrigin: '2021'
        },
        {
            term: 'Valid',
            description: 'Acceptable, reasonable, or respectable.',
            example: 'That opinion is valid.',
            dateOfOrigin: '2021'
        },
        {
            term: 'Cook',
            description: 'To perform exceptionally well.',
            example: 'He cooked during that presentation.',
            dateOfOrigin: '2022'
        },
        {
            term: 'Bodying',
            description: 'Dominating or outperforming someone.',
            example: 'She is bodying the competition.',
            dateOfOrigin: '2022'
        },
        {
            term: 'Brick',
            description: 'Extremely cold weather.',
            example: 'It is brick outside today.',
            dateOfOrigin: '2020'
        },
        {
            term: 'Clock It',
            description: 'To notice or point something out.',
            example: 'I clocked that mistake immediately.',
            dateOfOrigin: '2021'
        },
        {
            term: 'Type Shii',
            description: 'Expression meaning "that kind of thing" or agreement.',
            example: 'Yeah, type shii.',
            dateOfOrigin: '2023'
        },
        {
            term: 'Twin',
            description: 'A close friend or someone similar to you.',
            example: 'What is up, twin?',
            dateOfOrigin: '2022'
        },
        {
            term: 'Yap',
            description: 'To talk excessively.',
            example: 'Bro keeps yapping in class.',
            dateOfOrigin: '2023'
        },
        {
            term: 'Yapper',
            description: 'Someone who talks too much.',
            example: 'He is the biggest yapper I know.',
            dateOfOrigin: '2023'
        },
        {
            term: 'Gooning',
            description: 'Internet slang referring to obsessive online behavior.',
            example: 'He spent all weekend gooning online.',
            dateOfOrigin: '2022'
        },
        {
            term: 'Goofy Ahh',
            description: 'Silly, ridiculous, or weird.',
            example: 'That is a goofy ahh haircut.',
            dateOfOrigin: '2021'
        },
        {
            term: 'Zesty',
            description: 'Flamboyant, energetic, or slightly suspicious behavior.',
            example: 'Why is he acting so zesty?',
            dateOfOrigin: '2022'
        },
        {
            term: 'Fax',
            description: 'True or correct; agreement.',
            example: 'That is fax.',
            dateOfOrigin: '2020'
        },
        {
            term: 'Standing on Business',
            description: 'Taking responsibility and following through.',
            example: 'He is standing on business.',
            dateOfOrigin: '2023'
        },
        {
            term: 'Motion',
            description: 'Success, progress, influence, or activity.',
            example: 'He has motion now.',
            dateOfOrigin: '2022'
        },
        {
            term: 'Shlawg',
            description: 'Friend, dude, or bro.',
            example: 'What happened, shlawg?',
            dateOfOrigin: '2023'
        },
        {
            term: 'Bruzz',
            description: 'Friend or close acquaintance.',
            example: 'Relax, bruzz.',
            dateOfOrigin: '2024'
        },
        {
            term: 'Tuff',
            description: 'Impressive, cool, or admirable.',
            example: 'That design is tuff.',
            dateOfOrigin: '2021'
        },
        {
            term: 'Pushing P',
            description: 'Keeping it real or doing things positively.',
            example: 'We are pushing P today.',
            dateOfOrigin: '2022'
        },
        {
            term: 'Munt',
            description: 'Someone considered unattractive.',
            example: 'They called him a munt.',
            dateOfOrigin: '2024'
        },
        {
            term: 'Deadass',
            description: 'Seriously or genuinely.',
            example: 'I am deadass telling the truth.',
            dateOfOrigin: '2017'
        },
        {
            term: 'Finna',
            description: 'About to do something.',
            example: 'I am finna leave.',
            dateOfOrigin: '2010s'
        },
        {
            term: 'Shook',
            description: 'Surprised or shocked.',
            example: 'I was shook after hearing that.',
            dateOfOrigin: '2017'
        },
        {
            term: 'OOMF',
            description: 'One Of My Followers/Friends.',
            example: 'OOMF keeps posting memes.',
            dateOfOrigin: '2018'
        },
        {
            term: 'Understood the Assignment',
            description: 'Did something exceptionally well.',
            example: 'She understood the assignment.',
            dateOfOrigin: '2020'
        },
        {
            term: 'Nah He Tweaking',
            description: 'Someone is acting crazy or unreasonable.',
            example: 'Nah, he tweaking.',
            dateOfOrigin: '2021'
        },
        {
            term: "Alpha",
            description: "A dominant, confident, or respected person often viewed as a leader.",
            example: "He walked into the room like an alpha.",
            dateOfOrigin: "2000"
        },
        {
            term: "Chad",
            description: "A stereotypically attractive, confident, and successful man.",
            example: "That guy is such a Chad.",
            dateOfOrigin: "2017"
        },
        {
            term: "Goated",
            description: "Exceptionally good or the best at something.",
            example: "That performance was absolutely goated.",
            dateOfOrigin: "2020"
        },
        {
            term: "Griddy",
            description: "A popular dance often used to celebrate success.",
            example: "He hit the griddy after scoring.",
            dateOfOrigin: "2019"
        },
        {
            term: "Hawk Tuah",
            description: "A viral meme phrase originating from a 2024 interview clip.",
            example: "Everyone kept quoting Hawk Tuah online.",
            dateOfOrigin: "2024"
        },
        {
            term: "IJBOL",
            description: "Acronym for 'I Just Burst Out Laughing'.",
            example: "IJBOL, that video was hilarious.",
            dateOfOrigin: "2023"
        },
        {
            term: "Ick",
            description: "A sudden feeling of disgust or loss of attraction.",
            example: "Chewing with his mouth open gave me the ick.",
            dateOfOrigin: "2020"
        },
        {
            term: "It's Giving",
            description: "Used to describe the vibe or energy of something.",
            example: "It's giving main character energy.",
            dateOfOrigin: "2021"
        },
        {
            term: "iPad Kid",
            description: "A child heavily dependent on tablets and screens.",
            example: "He's been an iPad kid since kindergarten.",
            dateOfOrigin: "2021"
        },
        {
            term: "AF",
            description: "Abbreviation for 'as f***', used for emphasis.",
            example: "That test was hard AF.",
            dateOfOrigin: "2014"
        },
        {
            term: "AFK",
            description: "Away from keyboard; temporarily inactive.",
            example: "I'll be AFK for a few minutes.",
            dateOfOrigin: "1990"
        },
        {
            term: "Aesthetic",
            description: "A specific visual style or vibe.",
            example: "Her room has a cozy aesthetic.",
            dateOfOrigin: "2018"
        },
        {
            term: "FR",
            description: "Short for 'for real'.",
            example: "That's the best pizza, FR.",
            dateOfOrigin: "2018"
        },
        {
            term: "FR FR",
            description: "Extra emphasis on being serious or truthful.",
            example: "I'm FR FR not joking.",
            dateOfOrigin: "2019"
        },
        {
            term: "FY",
            description: "Short for 'for you', often referring to social media feeds.",
            example: "That showed up on my FY page.",
            dateOfOrigin: "2021"
        },
        {
            term: "Clean Girl Aesthetic",
            description: "A minimalist, polished, and natural beauty style.",
            example: "She's going for the clean girl aesthetic.",
            dateOfOrigin: "2022"
        },
        {
            term: "Demure",
            description: "Reserved, mindful, or modest, often used ironically online.",
            example: "Very demure, very mindful.",
            dateOfOrigin: "2024"
        },
        {
            term: "AI Slop",
            description: "Low-quality AI-generated content.",
            example: "That image is obvious AI slop.",
            dateOfOrigin: "2024"
        },
        {
            term: "Vibe Coding",
            description: "Programming based on intuition or AI assistance rather than detailed planning.",
            example: "I built the app through vibe coding.",
            dateOfOrigin: "2025"
        },
        {
            term: "Canon Event",
            description: "An unavoidable life experience that shapes someone.",
            example: "Failing that test was a canon event.",
            dateOfOrigin: "2023"
        },
        {
            term: "Brat",
            description: "Confident, rebellious, and unapologetically yourself.",
            example: "She's embracing her brat era.",
            dateOfOrigin: "2024"
        },
        {
            term: "Girl Dinner",
            description: "A random collection of snacks instead of a full meal.",
            example: "Crackers and grapes? That's girl dinner.",
            dateOfOrigin: "2023"
        },
        {
            term: "Snack",
            description: "An attractive person.",
            example: "He's looking like a snack today.",
            dateOfOrigin: "2018"
        },
        {
            term: "Fit",
            description: "An outfit or clothing style.",
            example: "That fit goes hard.",
            dateOfOrigin: "2019"
        },
        {
            term: "Glow Up",
            description: "A significant improvement in appearance or confidence.",
            example: "She had a huge glow up.",
            dateOfOrigin: "2017"
        },
        {
            term: "Ghosted",
            description: "Cutting off communication without explanation.",
            example: "He ghosted me after one date.",
            dateOfOrigin: "2015"
        },
        {
            term: "Iced Out",
            description: "Wearing expensive jewelry.",
            example: "He's iced out with diamonds.",
            dateOfOrigin: "2010"
        },
        {
            term: "GG",
            description: "Good game.",
            example: "GG, that match was fun.",
            dateOfOrigin: "1990"
        },
        {
            term: "Bruh",
            description: "Expression of disbelief, annoyance, or surprise.",
            example: "Bruh, what was that?",
            dateOfOrigin: "2010"
        },
        {
            term: "Cringe",
            description: "Embarrassing or awkward.",
            example: "That speech was cringe.",
            dateOfOrigin: "2010"
        },
        {
            term: "Slay",
            description: "To do something exceptionally well.",
            example: "She absolutely slayed that performance.",
            dateOfOrigin: "2010"
        },
        {
            term: "Yas",
            description: "Enthusiastic expression of approval.",
            example: "Yas queen!",
            dateOfOrigin: "2010"
        },
        {
            term: "Popping Off",
            description: "Doing extremely well or becoming very popular.",
            example: "That post is popping off.",
            dateOfOrigin: "2018"
        },
        {
            term: "On God",
            description: "Used to emphasize sincerity.",
            example: "On God, I'm telling the truth.",
            dateOfOrigin: "2010"
        },
        {
            term: "For Real",
            description: "Seriously or truthfully.",
            example: "For real, that's amazing.",
            dateOfOrigin: "1990"
        },
        {
            term: "Dead",
            description: "Something is extremely funny.",
            example: "That meme has me dead.",
            dateOfOrigin: "2010"
        },
        {
            term: "Mood",
            description: "Something highly relatable.",
            example: "Wanting to sleep all day is a mood.",
            dateOfOrigin: "2016"
        },
        {
            term: "Real One",
            description: "A loyal and trustworthy person.",
            example: "Thanks for helping me, you're a real one.",
            dateOfOrigin: "2010"
        },
        {
            term: "Certified",
            description: "Officially recognized for a trait.",
            example: "He's a certified hater.",
            dateOfOrigin: "2020"
        },
        {
            term: "Cooked Beyond Repair",
            description: "Completely doomed with no chance of recovery.",
            example: "After that mistake, I'm cooked beyond repair.",
            dateOfOrigin: "2024"
        },
        {
            term: "Fried",
            description: "Mentally exhausted or overwhelmed.",
            example: "My brain is fried after studying.",
            dateOfOrigin: "2010"
        },
        {
            term: "Deep Fried",
            description: "Extremely exhausted or absurdly edited.",
            example: "That meme is deep fried.",
            dateOfOrigin: "2017"
        },
        {
            term: "Fried Brain",
            description: "Having difficulty thinking due to overexposure or exhaustion.",
            example: "Too much TikTok gave me fried brain.",
            dateOfOrigin: "2023"
        },
        {
            term: "Brain Dead",
            description: "Extremely unintelligent or requiring no thought.",
            example: "That game mode is brain dead.",
            dateOfOrigin: "2010"
        },
        {
            term: "Chronically Online",
            description: "Spending excessive time on the internet.",
            example: "Only someone chronically online would know that.",
            dateOfOrigin: "2020"
        },
        {
            term: "Terminally Online",
            description: "Extremely immersed in internet culture.",
            example: "He's terminally online.",
            dateOfOrigin: "2021"
        },
        {
            term: "NPC Stream",
            description: "A livestream where the creator repeats scripted responses like an NPC.",
            example: "That NPC stream got millions of views.",
            dateOfOrigin: "2023"
        },
        {
            term: "Lore",
            description: "The background story or history of a person or event.",
            example: "What's the lore behind that joke?",
            dateOfOrigin: "2010"
        },
        {
            term: "Lore Drop",
            description: "The release of important background information.",
            example: "He just dropped major lore.",
            dateOfOrigin: "2022"
        },
        {
            term: "Main Quest",
            description: "The primary objective or most important task.",
            example: "Graduating is my main quest right now.",
            dateOfOrigin: "2022"
        },
        {
            term: "Side Character",
            description: "Someone who appears less important in a situation or story.",
            example: "I felt like a side character at that party.",
            dateOfOrigin: "2022"
        },
        {
            term: "Plot Armor",
            description: "When someone avoids failure or consequences unfairly.",
            example: "He survived again because of plot armor.",
            dateOfOrigin: "2018"
        },
        {
            term: "Character Development",
            description: "Personal growth resulting from life experiences.",
            example: "Failing that class was character development.",
            dateOfOrigin: "2020"
        },
        {
            term: "Villain Arc",
            description: "A period where someone becomes rebellious or antagonistic.",
            example: "After getting rejected, he's entering his villain arc.",
            dateOfOrigin: "2021"
        },
        {
            term: "Redemption Arc",
            description: "A period where someone improves after mistakes.",
            example: "He's on a redemption arc this semester.",
            dateOfOrigin: "2021"
        },
        {
            term: "Aura Loss",
            description: "Losing social points by doing something embarrassing.",
            example: "Falling down the stairs was a major aura loss.",
            dateOfOrigin: "2024"
        },
        {
            term: "Negative Aura",
            description: "Having an extremely uncool reputation.",
            example: "That move gave him negative aura.",
            dateOfOrigin: "2024"
        },
        {
            term: "Infinite Aura",
            description: "Maximum possible coolness or respect.",
            example: "Helping everyone earned him infinite aura.",
            dateOfOrigin: "2024"
        },
        {
            term: "Sigma Grindset",
            description: "A mindset focused on self-improvement and success.",
            example: "He's locked into the sigma grindset.",
            dateOfOrigin: "2021"
        },
        {
            term: "Grindset",
            description: "Constant focus on working and improving.",
            example: "She's in full grindset mode.",
            dateOfOrigin: "2019"
        },
        {
            term: "Looksmaxx",
            description: "Improving physical appearance as much as possible.",
            example: "He's been looksmaxxing all summer.",
            dateOfOrigin: "2020"
        },
        {
            term: "Heightmaxx",
            description: "Trying to maximize perceived height.",
            example: "Those shoes are for heightmaxxing.",
            dateOfOrigin: "2022"
        },
        {
            term: "Mogging",
            description: "Outshining someone in appearance or presence.",
            example: "He was mogging everyone in the photo.",
            dateOfOrigin: "2023"
        },
        {
            term: "Mogged",
            description: "Being outshined by someone else.",
            example: "I got mogged in every picture.",
            dateOfOrigin: "2023"
        },
        {
            term: "Goon",
            description: "A foolish follower or internet obsessed person.",
            example: "Stop acting like a goon.",
            dateOfOrigin: "2020"
        },
        {
            term: "Edging",
            description: "Deliberately delaying a result or conclusion for suspense.",
            example: "The trailer kept edging the big reveal.",
            dateOfOrigin: "2020"
        },
        {
            term: "Jelq",
            description: "A controversial internet practice claimed to improve appearance.",
            example: "He learned about jelqing from a forum.",
            dateOfOrigin: "2010"
        },
        {
            term: "Chadmaxxing",
            description: "Attempting to become more attractive and confident.",
            example: "He's been chadmaxxing lately.",
            dateOfOrigin: "2021"
        },
        {
            term: "Leanmaxxing",
            description: "Trying to achieve a lean physique.",
            example: "He's leanmaxxing before summer.",
            dateOfOrigin: "2022"
        },
        {
            term: "Winter Arc",
            description: "A period dedicated to self-improvement during winter.",
            example: "This winter arc is all about fitness.",
            dateOfOrigin: "2023"
        },
        {
            term: "Summer Arc",
            description: "Showing the results of self-improvement efforts.",
            example: "His summer arc is going great.",
            dateOfOrigin: "2023"
        },
        {
            term: "Brokie",
            description: "A playful insult for someone with little money.",
            example: "Stop acting like a brokie.",
            dateOfOrigin: "2021"
        },
        {
            term: "Clout",
            description: "Popularity or influence online.",
            example: "He's chasing clout.",
            dateOfOrigin: "2016"
        },
        {
            term: "Clout Chaser",
            description: "Someone seeking attention or popularity.",
            example: "That influencer is a clout chaser.",
            dateOfOrigin: "2017"
        },
        {
            term: "Devious",
            description: "Sneaky or mischievous.",
            example: "That's a devious plan.",
            dateOfOrigin: "2021"
        },
        {
            term: "Diabolical",
            description: "Extremely evil, wild, or outrageous.",
            example: "That prank was diabolical.",
            dateOfOrigin: "2021"
        },
        {
            term: "Finesse",
            description: "To obtain something through cleverness.",
            example: "He managed to finesse free tickets.",
            dateOfOrigin: "2010"
        },
        {
            term: "Lock TF In",
            description: "Focus seriously on a task.",
            example: "We need to lock TF in for exams.",
            dateOfOrigin: "2023"
        },
        {
            term: "We Up",
            description: "A celebration of success.",
            example: "We passed the test, we up!",
            dateOfOrigin: "2021"
        },
        {
            term: "We Ball",
            description: "Keep going despite setbacks.",
            example: "We lost, but we ball.",
            dateOfOrigin: "2022"
        },
        {
            term: "Run the Fade",
            description: "Challenge someone to a fight or confrontation.",
            example: "He wanted to run the fade after school.",
            dateOfOrigin: "2010"
        },
        {
            term: "Standing on Bidness",
            description: "Taking responsibility and staying true to your word.",
            example: "He's standing on bidness.",
            dateOfOrigin: "2023"
        },
        {
            term: "Type Beat",
            description: "Something that matches a certain vibe.",
            example: "That's a villain arc type beat.",
            dateOfOrigin: "2018"
        },
        {
            term: "Type Timing",
            description: "A person's current mindset or intentions.",
            example: "I'm on productive type timing.",
            dateOfOrigin: "2022"
        },
        {
            term: "Valid Crashout",
            description: "A meltdown considered understandable.",
            example: "That was a valid crashout after the loss.",
            dateOfOrigin: "2024"
        },
        {
            term: "Unc Status",
            description: "Being considered old or out of touch.",
            example: "Knowing that song gave him unc status.",
            dateOfOrigin: "2024"
        },
        {
            term: "Auntie Behavior",
            description: "Acting older or more mature than expected.",
            example: "Complaining about noise is auntie behavior.",
            dateOfOrigin: "2024"
        },
        {
            term: "Big Back",
            description: "Someone who loves eating large amounts of food.",
            example: "He's a certified big back.",
            dateOfOrigin: "2023"
        },
        {
            term: "Big Steppa",
            description: "Someone influential or respected.",
            example: "He's a big steppa around here.",
            dateOfOrigin: "2021"
        },
        {
            term: "Hater",
            description: "Someone who constantly criticizes others.",
            example: "Ignore the haters.",
            dateOfOrigin: "2000"
        },
        {
            term: "Hating",
            description: "Unnecessarily criticizing someone.",
            example: "You're just hating at this point.",
            dateOfOrigin: "2000"
        },
        {
            term: "Meat Riding",
            description: "Excessively praising or defending someone.",
            example: "Stop meat riding that celebrity.",
            dateOfOrigin: "2021"
        },
        {
            term: "Dickriding",
            description: "Excessively supporting someone without reason.",
            example: "They're dickriding that influencer.",
            dateOfOrigin: "2010"
        },
        {
            term: "D1 Glazer",
            description: "Someone who praises another person at an elite level.",
            example: "You're a D1 glazer.",
            dateOfOrigin: "2023"
        },
        {
            term: "Hall of Fame Glazer",
            description: "An extremely dedicated glazer.",
            example: "That's Hall of Fame glazing.",
            dateOfOrigin: "2024"
        },
        {
            term: "Professional Hater",
            description: "Someone known for constant criticism.",
            example: "He's a professional hater.",
            dateOfOrigin: "2022"
        },
        {
            term: "Generational Hater",
            description: "An all-time great hater.",
            example: "That's generational hating.",
            dateOfOrigin: "2023"
        },
        {
            term: "Rent Free",
            description: "Occupying someone's thoughts constantly.",
            example: "I live rent free in his head.",
            dateOfOrigin: "2018"
        },
        {
            term: "Delusionship",
            description: "An imaginary or unrealistic relationship.",
            example: "She's in a delusionship with that celebrity.",
            dateOfOrigin: "2023"
        },
        {
            term: "Situationship",
            description: "A romantic relationship without clear commitment.",
            example: "We're in a situationship.",
            dateOfOrigin: "2021"
        },
        {
            term: "Sneaky Link",
            description: "A secret romantic or casual partner.",
            example: "They're meeting as sneaky links.",
            dateOfOrigin: "2021"
        },
        {
            term: "Green Flag",
            description: "A positive trait or sign in a person or situation.",
            example: "Being kind to servers is a green flag.",
            dateOfOrigin: "2020"
        },
        {
            term: "Red Flag",
            description: "A warning sign indicating a potential problem.",
            example: "Lying on the first date is a red flag.",
            dateOfOrigin: "2020"
        },
        {
            term: "Beige Flag",
            description: "A quirky trait that is neither good nor bad.",
            example: "His obsession with spoons is a beige flag.",
            dateOfOrigin: "2022"
        },
        {
            term: "Soft Launch",
            description: "Subtly revealing a relationship online.",
            example: "She soft launched her boyfriend on Instagram.",
            dateOfOrigin: "2020"
        },
        {
            term: "Hard Launch",
            description: "Officially revealing a relationship publicly.",
            example: "They hard launched their relationship today.",
            dateOfOrigin: "2020"
        },
        {
            term: "Rizzler",
            description: "Someone with exceptional rizz or charisma.",
            example: "He's the rizzler of the group.",
            dateOfOrigin: "2023"
        },
        {
            term: "W Rizz",
            description: "Successful or impressive flirting ability.",
            example: "Getting her number was W rizz.",
            dateOfOrigin: "2023"
        },
        {
            term: "L Rizz",
            description: "Poor or unsuccessful flirting ability.",
            example: "That pickup line was L rizz.",
            dateOfOrigin: "2023"
        },
        {
            term: "Unspoken Rizz",
            description: "Attractiveness without needing to speak.",
            example: "He has unspoken rizz.",
            dateOfOrigin: "2023"
        },
        {
            term: "Negative Rizz",
            description: "Behavior that actively reduces attractiveness.",
            example: "That comment gave him negative rizz.",
            dateOfOrigin: "2023"
        },
        {
            term: "Infinite Rizz",
            description: "Unlimited charisma or charm.",
            example: "That confidence is infinite rizz.",
            dateOfOrigin: "2023"
        },
        {
            term: "Rizz God",
            description: "Someone considered a master of flirting.",
            example: "He's a rizz god.",
            dateOfOrigin: "2023"
        },
        {
            term: "Rizzing Up",
            description: "Flirting with or trying to impress someone.",
            example: "He's rizzing up his crush.",
            dateOfOrigin: "2022"
        },
        {
            term: "Baby Gronk",
            description: "A viral youth football player turned meme.",
            example: "Everyone was talking about Baby Gronk.",
            dateOfOrigin: "2023"
        },
        {
            term: "Livvy Dunne",
            description: "Often referenced in memes involving Baby Gronk.",
            example: "The comments are full of Livvy Dunne jokes.",
            dateOfOrigin: "2023"
        },
        {
            term: "Grimace Shake",
            description: "A viral meme involving McDonald's Grimace Shake.",
            example: "The Grimace Shake trend was everywhere.",
            dateOfOrigin: "2023"
        },
        {
            term: "Smurf Cat",
            description: "A viral blue cat meme character.",
            example: "That edit used Smurf Cat.",
            dateOfOrigin: "2023"
        },
        {
            term: "Skibidi Ohio Rizz",
            description: "A nonsensical combination of popular Gen Alpha slang.",
            example: "That sentence is pure skibidi Ohio rizz.",
            dateOfOrigin: "2023"
        },
        {
            term: "What The Sigma",
            description: "A humorous expression of confusion or surprise.",
            example: "What the sigma is going on?",
            dateOfOrigin: "2024"
        },
        {
            term: "Put The Fries In The Bag",
            description: "A meme phrase telling someone to stop talking and do their job.",
            example: "Bro, put the fries in the bag.",
            dateOfOrigin: "2024"
        },
        {
            term: "Those Who Know",
            description: "Used when referencing an inside joke or hidden meaning.",
            example: "Those who know 💀.",
            dateOfOrigin: "2024"
        },
        {
            term: "TTK",
            description: "Short form of 'Those Who Know'.",
            example: "TTK understand the reference.",
            dateOfOrigin: "2024"
        },
        {
            term: "Balkan Rage",
            description: "A meme phrase associated with exaggerated toughness.",
            example: "Bro activated Balkan rage.",
            dateOfOrigin: "2024"
        },
        {
            term: "Still Water",
            description: "A brainrot meme phrase implying hidden danger.",
            example: "Never trust still water.",
            dateOfOrigin: "2024"
        },
        {
            term: "German Stare",
            description: "A meme describing an intimidating stare.",
            example: "He hit me with the German stare.",
            dateOfOrigin: "2024"
        },
        {
            term: "Jamaican Smile",
            description: "A brainrot meme phrase with no fixed meaning.",
            example: "Watch out for the Jamaican smile.",
            dateOfOrigin: "2024"
        },
        {
            term: "Russian Frown",
            description: "A brainrot meme phrase used for dramatic effect.",
            example: "He unlocked the Russian frown.",
            dateOfOrigin: "2024"
        },
        {
            term: "Noradrenaline",
            description: "A word used ironically in brainrot memes.",
            example: "The noradrenaline kicked in.",
            dateOfOrigin: "2024"
        },
        {
            term: "Mango Mango Mango",
            description: "A viral brainrot catchphrase.",
            example: "Mango mango mango 🥭.",
            dateOfOrigin: "2024"
        },
        {
            term: "Jonkler",
            description: "A misspelled meme version of Joker.",
            example: "The Jonkler strikes again.",
            dateOfOrigin: "2023"
        },
        {
            term: "Sigma Boy",
            description: "A meme term describing an ultra-sigma character.",
            example: "He's acting like a sigma boy.",
            dateOfOrigin: "2024"
        },
        {
            term: "Bombardino Crocodilo",
            description: "A surreal AI brainrot character.",
            example: "Bombardino Crocodilo appeared in the edit.",
            dateOfOrigin: "2025"
        },
        {
            term: "Tralalero Tralala",
            description: "A viral AI-generated brainrot phrase.",
            example: "Tralalero tralala 🗣️.",
            dateOfOrigin: "2025"
        },
        {
            term: "Tung Tung Tung Sahur",
            description: "A viral meme based on Indonesian sahur content.",
            example: "Tung tung tung sahur!",
            dateOfOrigin: "2025"
        },
        {
            term: "Brr Brr Patapim",
            description: "A nonsensical AI brainrot catchphrase.",
            example: "Brr brr patapim.",
            dateOfOrigin: "2025"
        },
        {
            term: "Cappuccino Assassino",
            description: "A fictional AI-generated brainrot character.",
            example: "Cappuccino Assassino has arrived.",
            dateOfOrigin: "2025"
        },
        {
            term: "Italian Brainrot",
            description: "A category of absurd AI-generated meme content.",
            example: "That's pure Italian brainrot.",
            dateOfOrigin: "2025"
        },
        {
            term: "Chat, Is This Real?",
            description: "A streamer phrase asking viewers for confirmation.",
            example: "Chat, is this real?",
            dateOfOrigin: "2023"
        },
        {
            term: "Chat",
            description: "A way of referring to an audience or group.",
            example: "Chat, we made it.",
            dateOfOrigin: "2021"
        },
        {
            term: "W Chat",
            description: "Praise directed at a chat community.",
            example: "W chat today.",
            dateOfOrigin: "2022"
        },
        {
            term: "L Chat",
            description: "Criticism directed at a chat community.",
            example: "L chat, do better.",
            dateOfOrigin: "2022"
        },
        {
            term: "Mods",
            description: "Moderators who manage an online community.",
            example: "Mods, ban that spammer.",
            dateOfOrigin: "2000"
        },
        {
            term: "Mod Check",
            description: "Calling for moderators to take action.",
            example: "Mod check in chat.",
            dateOfOrigin: "2020"
        },
        {
            term: "Pog",
            description: "An expression of excitement or hype.",
            example: "That's so pog.",
            dateOfOrigin: "2018"
        },
        {
            term: "Poggers",
            description: "An enthusiastic version of pog.",
            example: "Poggers, we won!",
            dateOfOrigin: "2018"
        },
        {
            term: "PogChamp",
            description: "A famous reaction meme that expresses excitement.",
            example: "Absolute PogChamp moment.",
            dateOfOrigin: "2012"
        },
        {
            term: "EZ",
            description: "Short for easy; used after a victory.",
            example: "EZ game.",
            dateOfOrigin: "2000"
        },
        {
            term: "Touching Spawn",
            description: "Being stuck at a team's spawn area.",
            example: "We're still touching spawn.",
            dateOfOrigin: "2018"
        },
        {
            term: "Touch Spawn",
            description: "Returning to or staying near spawn.",
            example: "Stop touch spawning and push forward.",
            dateOfOrigin: "2018"
        },
        {
            term: "Third Partying",
            description: "Joining a fight between others to take advantage of the situation.",
            example: "We got third partied right after winning the battle.",
            dateOfOrigin: "2018"
        },
        {
            term: "Sweaty",
            description: "A player who tries extremely hard to win.",
            example: "That lobby is full of sweaty players.",
            dateOfOrigin: "2018"
        },
        {
            term: "Tryhard",
            description: "Someone who puts excessive effort into winning.",
            example: "Stop being such a tryhard.",
            dateOfOrigin: "2010"
        },
        {
            term: "Camper",
            description: "A player who stays in one spot waiting for opponents.",
            example: "There's a camper hiding in that building.",
            dateOfOrigin: "2000"
        },
        {
            term: "Smurf",
            description: "An experienced player using a low-level account.",
            example: "That new account is obviously a smurf.",
            dateOfOrigin: "2005"
        },
        {
            term: "Nerfed",
            description: "Made weaker through a game update.",
            example: "That weapon got nerfed last patch.",
            dateOfOrigin: "1997"
        },
        {
            term: "Buffed",
            description: "Made stronger through a game update.",
            example: "The character was buffed this season.",
            dateOfOrigin: "1997"
        },
        {
            term: "OP",
            description: "Overpowered; stronger than intended.",
            example: "That character is completely OP.",
            dateOfOrigin: "2000"
        },
        {
            term: "Broken",
            description: "So powerful that it feels unfair.",
            example: "That strategy is broken.",
            dateOfOrigin: "2010"
        },
        {
            term: "Meta",
            description: "The most effective strategy or playstyle currently available.",
            example: "Everyone is using the meta build.",
            dateOfOrigin: "2010"
        },
        {
            term: "Low Diff",
            description: "Winning with little difficulty.",
            example: "That match was low diff.",
            dateOfOrigin: "2021"
        },
        {
            term: "Mid Diff",
            description: "Winning with moderate difficulty.",
            example: "I'd say that fight was mid diff.",
            dateOfOrigin: "2021"
        },
        {
            term: "High Diff",
            description: "Winning with significant difficulty.",
            example: "That boss was high diff.",
            dateOfOrigin: "2021"
        },
        {
            term: "No Diff",
            description: "Winning effortlessly.",
            example: "That was no diff.",
            dateOfOrigin: "2021"
        },
        {
            term: "Extreme Diff",
            description: "A victory achieved with maximum effort.",
            example: "That was extreme diff.",
            dateOfOrigin: "2021"
        },
        {
            term: "Skill Issue",
            description: "A sarcastic way of saying a problem is due to lack of skill.",
            example: "You missed the jump? Skill issue.",
            dateOfOrigin: "2021"
        },
        {
            term: "Cope",
            description: "Used to mock someone making excuses.",
            example: "Keep coping.",
            dateOfOrigin: "2018"
        },
        {
            term: "Seethe",
            description: "To be visibly angry or frustrated.",
            example: "He's still seething after losing.",
            dateOfOrigin: "2018"
        },
        {
            term: "Mald",
            description: "A combination of mad and bald; being extremely angry.",
            example: "He's absolutely malding right now.",
            dateOfOrigin: "2020"
        },
        {
            term: "Copium",
            description: "Imaginary substance consumed to avoid accepting reality.",
            example: "That's pure copium.",
            dateOfOrigin: "2019"
        },
        {
            term: "Hopium",
            description: "Excessive optimism despite poor odds.",
            example: "Fans are surviving on hopium.",
            dateOfOrigin: "2020"
        },
        {
            term: "Ackshually",
            description: "A mocking misspelling of 'actually' used to imitate a know-it-all.",
            example: "Ackshually, that's not correct.",
            dateOfOrigin: "2018"
        },
        {
            term: "Erm Actually",
            description: "A phrase used before correcting someone in a nerdy way.",
            example: "Erm actually, the answer is different.",
            dateOfOrigin: "2022"
        },
        {
            term: "Nerd Emoji 🤓",
            description: "Used to mock someone for being overly serious or technical.",
            example: "Erm actually 🤓.",
            dateOfOrigin: "2021"
        },
        {
            term: "Skull Emoji 💀",
            description: "Used to indicate something is extremely funny.",
            example: "That joke has me 💀.",
            dateOfOrigin: "2021"
        },
        {
            term: "Crying Emoji 😭",
            description: "Used to show intense laughter, sadness, or emotion.",
            example: "I'm crying 😭.",
            dateOfOrigin: "2018"
        },
        {
            term: "Moai 🗿",
            description: "An emoji used to represent stoicism or meme humor.",
            example: "Bro really said that 🗿.",
            dateOfOrigin: "2021"
        },
        {
            term: "Clown Emoji 🤡",
            description: "Used to call someone foolish or embarrassing.",
            example: "I believed that rumor 🤡.",
            dateOfOrigin: "2019"
        },
        {
            term: "Sigma Face",
            description: "A serious expression associated with sigma memes.",
            example: "He hit the sigma face for the camera.",
            dateOfOrigin: "2022"
        },
        {
            term: "GigaChad",
            description: "The ultimate exaggerated version of a Chad.",
            example: "Helping everyone for free is GigaChad behavior.",
            dateOfOrigin: "2021"
        },
        {
            term: "Soyjak",
            description: "A meme character used to mock excessive enthusiasm.",
            example: "The comments turned into soyjaks.",
            dateOfOrigin: "2017"
        },
        {
            term: "Wojak",
            description: "A meme character representing emotions and reactions.",
            example: "That image uses a Wojak template.",
            dateOfOrigin: "2010"
        },
        {
            term: "Canny",
            description: "Something that feels normal or familiar.",
            example: "That picture looks strangely canny.",
            dateOfOrigin: "2019"
        },
        {
            term: "Uncanny",
            description: "Something unsettling because it seems almost real.",
            example: "That AI face is uncanny.",
            dateOfOrigin: "2019"
        },
        {
            term: "Backrooms",
            description: "A fictional endless maze of eerie empty rooms.",
            example: "That hallway looks like the Backrooms.",
            dateOfOrigin: "2019"
        },
        {
            term: "Liminal",
            description: "Having an eerie in-between atmosphere.",
            example: "This photo feels liminal.",
            dateOfOrigin: "2020"
        },
        {
            term: "Analog Horror",
            description: "A horror genre presented through old-style media recordings.",
            example: "The series is analog horror.",
            dateOfOrigin: "2016"
        },
        {
            term: "Mandela Catalogue",
            description: "A popular analog horror web series.",
            example: "That creature looks straight out of Mandela Catalogue.",
            dateOfOrigin: "2021"
        },
        {
            term: "Digital Circus",
            description: "A popular animated web series often referenced online.",
            example: "Everyone was talking about Digital Circus.",
            dateOfOrigin: "2023"
        },
        {
            term: "Content Farm",
            description: "A channel that mass-produces low-quality content for views.",
            example: "That page is just a content farm.",
            dateOfOrigin: "2015"
        },
        {
            term: "Brainrot Edit",
            description: "A chaotic edit filled with memes and rapid effects.",
            example: "That TikTok is a brainrot edit.",
            dateOfOrigin: "2024"
        },
        {
            term: "Trollface Edit",
            description: "An edit featuring the Trollface meme for comedic effect.",
            example: "The video ended with a trollface edit.",
            dateOfOrigin: "2022"
        },
        {
            term: "Phonk",
            description: "A music genre commonly used in sigma and edit videos.",
            example: "That phonk track goes hard.",
            dateOfOrigin: "2010"
        },
        {
            term: "Sigma Edit",
            description: "A video edit portraying someone as powerful or independent.",
            example: "Someone made a sigma edit of him.",
            dateOfOrigin: "2022"
        },
        {
            term: "Velocity Edit",
            description: "A fast-paced edit using speed changes and visual effects.",
            example: "That velocity edit got millions of views.",
            dateOfOrigin: "2022"
        }
        
    ])
    terms = this._alphaTerms.asReadonly();
}
