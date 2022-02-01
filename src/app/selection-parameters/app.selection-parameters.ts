import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {LoremIpsum} from "lorem-ipsum";
import {ComunicationService} from "../../services/comunication.service";
import {Subscription} from "rxjs";

export function settingTime(select:number){
    var timeSelected;
    switch (select) {
        case 1:
            timeSelected = 1;
            break;
        case 2:
            timeSelected = 2;
            break;
        case 3:
            timeSelected = 5;
            break;
        default:
            timeSelected = 0;
            break;
    }
    return timeSelected;
}

export function settingText(select: number){
    var selected;

    const phrases = [
        "Most people understand the importance of protecting their skin from the sun, and how the ultraviolet (UV) radiation can damage skin and eyes over years of exposure. However, many people don’t consider themselves exposed to the sun while driving.", "Most people understand the importance of protecting their skin from the sun, and how the ultraviolet (UV) radiation can damage skin and eyes over years of exposure. However, many people don’t consider themselves exposed to the sun while driving.",
        "You may be surprised to learn that, when asked to consider the items they can’t live without, Americans rank toothpaste and their toothbrush almost as important as the internet and cell phones, according to a recent study from Cooper Tires.",
        "Coping with the cold, dark days of winter can be challenging for humans and it’s also a trial for birds. Our feathered friends have evolved in some ingenious ways to cope with wintry weather. Some species migrate to warmer places, some flock together to share their warmth and if they stay put, many have developed some unique physical characteristics that protect and defend them from the cold.",
        "Throughout the years, technology has improved drastically and devices that were unimaginable 50 years ago. And perhaps the most advanced and interesting of society’s technological advancements is robots.",
        "How do the small vintners thrive and compete? Some streamline the number of wines offered; others focus on building their wine clubs and relationships with consumers who purchase direct. One California winery has taken an unconventional approach–creating a values-based partnership with a like-minded winery in another part of the world."
    ];

    const words = ["apple", "paper", "plane", "language", "average", "skyscraper","computer", "yourself", "constant", "improved", "ultraviolet", "friends", "winter", "dark", "sunny", "small", "people", "pain", "weird", "drastically", "time", "discovery", "steps", "cooking",  "year","iron", "pasta", "problem", "mesmerizing", "hide", "building", "polymorphism", "structure", "chocolate", "bucket","dolphin",
        "constellation","services", "compass", "bird", "aircraft", "lady", "carpet" ,"controller", "professional", "challenging", "bird", "head", "dictionary", "error", "monetization", "construction", "aeroplane", "demonstration", "feathered", "growth", "species", "constitutional",  "ephemeral", "ship", "strengths", "characteristic", "education", "definition", "association","cookie", "pie", "lamp", "pizza",
        "conversation", "contemplation", "fear", "cinema", "associated", "transplantation", "coined", "example", "combination", "dysfunctional", "rooftop", "psychological", "forest", "deforestation", "analysis", "accountant", "differentiation", "experience", "outsource", "conviction", "oven", "trash", "straightforward", "figure", "ventilation", "stasis", "model", "hungry", "aspirational", "butterfly", "paparazzi"];

    let construction: string[] = new Array();
    switch (select) {
        case 1:
            selected = phrases[Math.floor(Math.random() * phrases.length)];
            break;
        case 2:
            for(var i=0; i<=70;i++){
                construction.push(words[Math.floor(Math.random() * phrases.length)+1]);
            }
            var constructed = construction.toString();
            selected = constructed.replace(/,/g, " ");
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

@Component({
    selector: 'selection-parameters',
    templateUrl: './app.selection-parameters.component.html',
    styleUrls: ['./app.selection-parameters.component.css']
})

export class SelectionParametersComponent implements OnInit, OnDestroy{
    constructor(private router: Router, private  data: ComunicationService) {
    }
    @Output() whenStart = new EventEmitter<any>();
    time: number = 0;
    type: number = 0;
    param: any[] = new Array();
    getOptions(){
        this.decideParameters();
        this.router.navigateByUrl('track');
        
    }

    decideParameters(){
        var textSet = settingText(parseInt(this.type.toString()));
        var timeSet = settingTime(parseInt(this.time.toString()));
        this.param.push(textSet);
        this.param.push(timeSet);
        this.newMessage();
    }

    subscription: Subscription = new Subscription;
    // @ts-ignore
    message: string;

    ngOnInit(){
        this.subscription = this.data.curentMessage.subscribe(message => this.message = message);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    newMessage() {
        this.data.changeMessage(this.param.toString());
    }

}
