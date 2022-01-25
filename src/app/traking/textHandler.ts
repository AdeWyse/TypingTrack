import {LoremIpsum} from "lorem-ipsum";

export function settingText(select: number){
    const phrases = [
        "Most people understand the importance of protecting their skin from the sun, and how the ultraviolet (UV) radiation can damage skin and eyes over years of exposure. However, many people don’t consider themselves exposed to the sun while driving.", "Most people understand the importance of protecting their skin from the sun, and how the ultraviolet (UV) radiation can damage skin and eyes over years of exposure. However, many people don’t consider themselves exposed to the sun while driving.",
        "You may be surprised to learn that, when asked to consider the items they can’t live without, Americans rank toothpaste and their toothbrush almost as important as the internet and cell phones, according to a recent study from Cooper Tires",
        "Coping with the cold, dark days of winter can be challenging for humans and it’s also a trial for birds. Our feathered friends have evolved in some ingenious ways to cope with wintry weather.Some species migrate to warmer places, some flock together to share their warmth and if they stay put, many have developed some unique physical characteristics that protect and defend them from the cold.",
        "Throughout the years, technology has improved drastically and devices that were unimaginable 50 years ago. And perhaps the most advanced and interesting of society’s technological advancements is robots.",
        "How do the small vintners thrive and compete? Some streamline the number of wines offered; others focus on building their wine clubs and relationships with consumers who purchase direct. One California winery has taken an unconventional approach–creating a values-based partnership with a like-minded winery in another part of the world."
    ];

    const words = ["apple", "paper", "plane" , "average", "computer", "yourself", "constant", "improved", "ultraviolet", "friends", "winter", "dark", "sunny", "small", "people", "pain", "weird", "drastically", "time", "discovery", "steps", "cooking",
        "year", "pasta", "compass", "lady", "controller", "professional", "challenging", "bird", "head", "dictionary", "error", "monetization", "construction", "aeroplane", "demonstration", "feathered", "growth", "species", "constitutional",
        "ephemeral", "strengths", "definition", "pie", "contemplation", "fear", "cinema", "associated", "transplantation", "coined", "example"];


    var selected: string = '';
    let construction: string[] = new Array();
    switch (select) {
        case 1:
            selected = phrases[Math.random() * phrases.length];
            console.log("Here ", selected);
            break;
        case 2:
            for(var i=0; i<=70;i++){
                construction.push(words[Math.random()* words.length]);
            }
            selected = construction.toString();
            break;
        case 3:
            var lorem = new LoremIpsum({
                sentencesPerParagraph: {
                    max: 8,
                    min: 4
                },
                wordsPerSentence: {
                    max: 16,
                    min: 4
                }
            });
            selected = lorem.generateParagraphs(1);
            break;
        default:
            selected = "Error: No text chosen.";
            break;
    }

    return selected;
}