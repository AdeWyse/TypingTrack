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
        `In winter, it seems like life slows down in a variety of ways. Maybe that's because we need a break after the busy holiday season or because we have a natural urge to "hibernate" when the days are short and the weather outside is cold. But the truth is, the best time to get started on your weight loss goals is now so you stay on track all year round. The good news: you can enjoy the comfort foods that make you feel cozy when the weather outside is frightful AND still lose weight. Courtney McCormick, MPH, RDN, LDN, Manager, Clinical Research & Nutrition at Nutrisystem, offers these tips to serve as a guide for winter weight loss.Focus on Protein: Protein is an essential part of a healthy lifestyle and a key to weight loss. "Protein helps with satiety and by including some protein at each meal and snack occasion, it can help you to stay full longer and may help prevent hunger and cravings," says McCormick. Look for meals high in protein.Fuel Your Winter Workouts: Exercising outdoors in winter can be invigorating and even fun. Brisk walking will warm you up quickly. Shoveling snow not only heats you up, but it also works your cardiovascular system (heart and lungs), tones your muscles and burns more than 200 calories in a half hour (average for a 155-pound person). Eat Your Favorite Meals: Winter is the perfect time to enjoy your favorite comfort foods like soup or pasta. Weight loss plans like Nutrisystem offer restaurant favorites that are perfectly-portioned for half the calories of dining-out options so you can enjoy without any guilt. Think Café-Style Creamy Tomato Soup or Bistro-Style Toasted Ravioli.Don't Go At It Alone: Achieving the goals you've set for yourself is so much easier when you have a support system. The best people to have on your team when you're trying to lose excess weight are those who sit down at daily meals with you. Even better, your chances of reaching and maintaining your weight-loss goal increase dramatically if another person in your household joins you on the journey. If you're looking for an easy-to-follow plan to keep you on track, opt for Nutrisystem's Partner Plan.Power Up on Nutrients: Winter conditions can put extra stress on our bodies, so we need a steady supply of the essential nutrients to stay healthy and strong. Vitamin D plays a key role in metabolism, but we need exposure to sunlight for our bodies to produce it. Vitamin C gives our immune systems a potent boost, which is especially important during the cold and flu season. Look for foods that are rich in these vitamins such as salmon or milk for Vitamin D and broccoli, strawberries and kiwi for Vitamin C.Remember, your weight loss goals are more than achievable this winter if you are geared with the right tips, tricks and tools.`,
        `As January stretches on and the midwinter blahs kick in, consider a healthy way to perk up your day: Chilean cherries. Although cherries are available domestically in the United States in the summer months, in the winter they bring a much-needed burst of color and flavor. Winter cherries come from the Southern Hemisphere, primarily from Chile in South America. Chile's diverse climate lends itself to growing many types of fruit, including cherries. Cherries not only taste great, they also pack a powerful nutritional punch. Chilean cherries are rich in antioxidants, as well as vitamin C, which is important to maintaining a healthy immune system.Chilean cherries also contain vitamins A and K, along with potassium, magnesium and even some of your recommended daily amount of calcium. Cherries are a tasty source of fiber, too. A one-cup serving of cherries provides 25% of the recommended daily amount of vitamin C, according to the Chilean Cherry Committee. In addition, cherry consumption also may help reduce the risk of cancer and heart disease. But wait, there's more. Cherries contain a healthy dose of the sleep-promoting hormone melatonin. "When it's winter in the Northern Hemisphere, it's summer in Chile, so that means you can enjoy delicious, sweet cherries through the winter," says Karen Brux, managing director for the Chilean Fresh Fruit Association. "For a taste of summer, look to Chile," she says. Brux also shared some ideas for how to "Cherrish" Every Moment with Chilean Cherries, and share the taste of Chilean cherries with others.- Sweeten it up. You can "Cherrish" Every Moment by stirring a cup of halved and pitted Chilean cherries into your banana smoothie. Add some cocoa powder for a true chocolate-covered cherry experience. A winter cherry tart or Chilean Cherry Chocolate Chip Muffins can hit the sweet spot, too.- Savor the flavor. "Cherrish" the taste of Chilean cherries in a variety of savory recipes. Chilean cherries add just the right pop of flavor and texture to a mixed green salad or a wild rice side dish.`,
        `Whether it's from everyday deadlines or financial struggles,  stress shows up often in life. And your body reacts to it: your heart rate increases, your blood vessels narrow — and over time, these little blows can add up and do damage to your health, particularly your heart. With chronic stress, you're more likely to have high blood pressure, heart disease, diabetes, obesity, and poor sleep. Even other parts of your body — from your lungs to your gut — can take a hit.But while you can't always limit the amount of stress in your life, you can work on changing how you respond to it. Just like the automatic "fight or flight" response that kicks in when you're scared — your muscles tense, heart rate increases, and brain becomes more alert– your body also has a built-in, healthy relaxation response. When that's triggered, the opposite happens: your breathing and heart rate slow down, and your blood pressure decreases. Luckily, with practice, you can learn to trigger that response. Try these techniques on your own or find a teacher or class to help you get started. Don't get discouraged if you don't get the hang of it quickly. And if one approach doesn't work for you, try something new. You can learn to de-stress in lots of other ways. Meditation: One of the most studied approaches for managing stress, this involves developing your ability to stay focused on the present, instead of worrying about the past or future. Find a quiet location with as few distractions as possible. Get comfortable by either sitting, lying or walking. Focus your attention on a specific word or set of words, an object or your breathing. And let distractions, including thoughts, come and go without judgment. Progressive muscle relaxation: To feel the effect, first tense your muscles for a few seconds, then relax them. Start by tensing and relaxing your toes, then your calves and on up to your face. Do one muscle group at a time. Deep breathing: Take in a slow, deep breath, let your stomach or chest expand and then exhale slowly. Repeat a few times. Many people don't breathe deeply, but it is relaxing and something you can do anytime, anywhere.Guided imagery. This involves a series of steps that include relaxing and visualizing the details of a calm, peaceful setting, such as a garden. Practice self-compassion: Understand that life's challenges are inevitable. Give yourself the care and tenderness you need when experiencing difficulty. Getting your mind and body to a place of calm doesn't always mean being still, however. Other healthy ways to manage stress include taking a yoga or tai chi class, talking to a professional counselor, joining a stress management program or an art class, or meeting up with friends for a brisk walk. Being in nature can be very soothing for some people. Combining de-stressors such as these with other healthy habits can go a long way toward strengthening your heart. Eat more veggies, fruits and whole grains, and less sodium, sugar and saturated fats, for example. Move your body more — such as through dancing and walking meetings. Find exercises you actually love and do them regularly. Get enough good, quality sleep. And develop a strong social support system. Then rethink some of the familiar ways you may be coping with stress, such as drinking alcohol frequently, using drugs and other substances, smoking or overeating. They can actually worsen your stress — and your health. If you need help finding additional resources to help you cope with stress, talk to a healthcare provider.`,
        `Basketball and bicycling rank highest for injuries among recreational sports, causing 1.5 million accidents per year. Baseball, soccer and softball follow, each with almost half a million injuries yearly, according to the U.S. Consumer Product Safety Commission. Whether you're upping your own practice schedule or you're a parent of a student athlete headed back to school, heeding a few precautions goes a long way in preventing sports injuries. Here are some tips from osteopathic physician Marcel Fraix, member of the Fellow of the American Academy of Physical Medicine and Rehabilitation (FAAPMR) and assistant professor at Western University of Health Sciences. Fraix is also a staff physician at Casa Colina Centers for Rehabilitation in California, where he specializes in sports-related disorders. Start with a check-up when possible. Physical stress on a young body can be harmful when coupled with an underlying medical condition or heart problem. Likewise, get an exam before stressing the heart if you're middle-aged and mostly sedentary. Pre-conditioning programs for specific sports help. Injuries usually occur at the beginning of the season, when you are most likely to be out of shape. Building hamstrings and inner quadriceps muscles helps prevent knee injuries. Diligently use the proper safety equipment: mouth guards, safety goggles, helmets and elbow and knee pads. Don't forget to apply sunscreen SPF 15 or higher. Stay adequately hydrated with water or a water-electrolyte drink. Replacing fluid lost from sweating is essential to maximize athletic performance and prevent heat exhaustion, especially during warm weather. Treat injuries on the spot. Keep a first aid kit ready for cuts and scrapes, allergic reactions, insect bites and eye irritations. Most importantly, be prepared to treat muscle pain at the first sign before it sidelines you. There are safe, natural and unscented pain relievers available. Look for a homeopathic medicine like Arnicare Gel, which works with the body instead of just masking pain. Try it on legs stiff from running or cycling, or on shoulders aching from too many tennis racket swings. It also helps with pain from strained ligaments or bumps and bruises from hard-fought basketball games. Limit practice and playing time. Nearly half of all injuries suffered by children are results of overdoing it. Consider allowing a child to take three months off per year and limiting practice to 12 hours per week for one sport, and 20 hours for multiple sports.`,
        `Now is the ideal time to revisit your travel bucket list. Before you choose your destination based solely on a list, though, reflect on the types of experiences that really gratify you – culinary, history, culture, adventure. Then craft your ideal vacation from there.Seek out a well-established leader in experiential travel to give you a taste of what it's like to be a local and then some – whether it's cooking classes in a Tuscan villa or bathing with elephants at a Thailand sanctuary."At Blue-Roads Touring Company, we immerse our guests in a region's culture and customs," says Ed Pettitt, General Manager. "We take them to places that are difficult or next to impossible to plan and explore on their own. Fun, enriching visits into local homes to share authentically prepared meals. Outings to farms, orchards, vineyards. Even treks to the frontlines of Europe's most famous battlefields. "If great literature moves you, you'll get an intimate look at William Shakespeare, regarded to be the world's greatest English-language author, dramatist and poet. As part of Blue-Roads' Heart of England tour, you'll venture to Stratford-upon-Avon to delve into the Bard's life, including his timbered childhood home and wife Anne Hathaway's thatched cottage. Passionate about gardening, or simply just love floral splendor? The world-renowned Royal Horticultural Society Chelsea Flower Show puts you in the center of the sensory pleasures of England's greatest gardens. Is cuisine a top, or the utmost, consideration? Focus on authenticity and diversity above price in deciding what to eat, drink and do. Blue-Roads indulges its guests with many options such as, sampling some of the world's best street food in Hanoi, Michelin-starred dining in Spain, or savoring fresh shellfish right off the boat in Gallipoli. The best culinary trip delights more than your palate. It informs and engages you, too. Explore how grapes become world-class varietals or how milk is crafted into mozzarella. Share in the tradition and ceremony of High Tea. Culinary experiences bring you together with others and encourage cross-cultural understanding. A personally fulfilling itinerary elevates your precious time off. Key to that is your individual space and discovery time. Seek out the destination expert who strikes a balance between organized activities and downtime. Blue-Roads favors quality over quantity, thoughtfully curating a select number of unforgettable experiences while also ensuring you of time to relax, recharge and unwind. Their careful combination of specialized excursions, sightseeing and personal time encourages you to dig deeper into the many layers of a destination. Instead of merely returning home with items checked off from a travel to-do list, they ensure that you return with expanded experience and knowledge. You'll relish your trip for years after – perhaps when you try out that recipe for delicious eastern European pierogi or use that tongue-twisting phrase learned at the Welsh Language Heritage Centre. As you create your next vacation, start with what's meaningful to you, and what brings you joy. Your special trip will unfold from there.`,
        `Many older adults experience feelings of loneliness and isolation as they age, but pets can provide the companionship and love seniors desire. A new survey conducted by Home Instead, Inc., franchisor of the Home Instead Senior Care Network, found regular interaction with animals can help to reduce feelings of isolation and loneliness in older adults. The most frequently cited benefits of pet ownership are company, comfort, unconditional love, entertainment and improved mood. In fact, 86 percent of pet owners agree they would be lonelier and less happy without their pet, and 58 percent agree that they would not be as physically healthy without their pet. The companionship and love provided by a pet can be especially meaningful for those most at risk for isolation. Home Instead found that pet owners who live alone are significantly more likely to report increased benefits of pet ownership. Owning a pet can also be an important factor for seniors deciding where they will live as they age. According to the survey, 82 percent of older adults say they will not consider moving to a senior living community without their pet. While interaction with animals has been shown to improve mental and physical well-being in older adults, research from Home Instead confirms that seniors don't need to own pets to experience the benefits. Those who regularly interact with, but don't own, pets report feeling better just spending time with animals owned by family, friends and neighbors. There are many ways seniors can interact with animals without taking on the responsibility of pet ownership. Here are a few ideas: Volunteer at a rescue organization or animal shelter. Many rescue organizations and animal shelters could use an extra hand. Seniors can help provide care for animals, including feeding, watering, restocking supplies, washing dishes, walking dogs, cleaning cages and enclosures or socializing with the animals. Volunteers experience the benefits of interacting with pets, and they can provide some care to an animal in need; Get to know your neighbors' pets. Seniors who regularly walk their neighborhoods will likely see pet owners walking their dogs. Asking to join them for a walk might lead to new friendships with neighbors and dogs; Connect with a therapy animal. Pet Partners therapy teams, made up of a pet owner and his or her registered animal, go into many locations where seniors are living or being treated, such as hospitals, hospice centers and care communities; Visit a pet store. Some pet stores sell small animals, such as guinea pigs, hamsters, chinchillas, gerbils, mice, rats, certain geckos, bearded dragons, snakes, and specific types of frogs, birds and fish. Visiting can provide a pet fix! With so many options available, finding the right animal interaction for each individual should be as easy as a walk in the dog park.`
    ];

    const words = ["apple", "paper", "plane", "language", "average", "skyscraper","computer", "yourself", "constant", "improved", "ultraviolet", "friends", "winter", "dark", "sunny", "small", "people", "pain", "weird", "drastically", "time", "discovery", "steps", "cooking",  "year","iron", "pasta", "problem", "mesmerizing", "hide", "building", "polymorphism", "structure", "chocolate", "bucket","dolphin",
        "constellation","services", "compass", "bird", "aircraft", "lady", "carpet" ,"controller", "professional", "challenging", "bird", "head", "dictionary", "error", "monetization", "construction", "aeroplane", "demonstration", "feathered", "growth", "species", "constitutional",  "ephemeral", "ship", "strengths", "characteristic", "education", "definition", "association","cookie", "pie", "lamp", "pizza",
        "conversation", "contemplation", "fear", "cinema", "associated", "transplantation", "coined", "example", "combination", "dysfunctional", "rooftop", "psychological", "forest", "deforestation", "analysis", "accountant", "differentiation", "experience", "outsource", "conviction", "oven", "trash", "straightforward", "figure", "ventilation", "stasis", "model", "hungry", "aspirational", "butterfly", "paparazzi"];

    let construction: string[] = new Array();
    switch (select) {
        case 3:
            selected = phrases[Math.floor(Math.random() * phrases.length)];
            break;
        case 2:
            for(var i=0; i<=200;i++){
                construction.push(words[Math.floor(Math.random() * words.length)+1]);
            }
            var constructed = construction.toString();
            selected = constructed.replace(/,/g, " ");
            break;
        case 1:
            var lorem = new LoremIpsum({
                sentencesPerParagraph: {
                    max: 3,
                    min: 2
                },
                wordsPerSentence: {
                    max: 16,
                    min: 4
                }
            });
            selected = lorem.generateParagraphs(5);
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
        var textSet = parseInt(this.type.toString());
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
