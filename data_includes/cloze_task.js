
// Experiment file Coco 

// This says: "begin with the intro, then follow it with real sentences evenly
// shuffled with npi sentences, with each sentece separated by the "sep"
// item (a 1 second pause).

//document.querySelector('input').setAttribute('autofocus', 'autofocus');

var shuffleSequence = seq("consent", "demo","welcome", "instruction_check",
                           startsWith("coco"),"debrief","exit"
                         );
var showProgressBar = false;
//var counterOverride = 2;
                  
var defaults = [
    "DashedSentence", {mode: "self-paced reading", display: "in place"},
    "Form", {continueOnReturn: false, continueMessage: "Click here to continue with the story!"},
    "AY_Form", {continueOnReturn: true, continueMessage: null}, 
    "QuestionAlt", {randomOrder: false, presentHorizontally: true},
]; 
        
var items = [
    
["consent", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, consentRequired: true, html: {include: "LTEC_consent_2020.html" }} ],
["welcome", "AY_Form", {hideProgressBar: true, countsForProgressBar: false, consentRequired: true, continueMessage:"Click here to start", html: {include: "Welcome.html"}} ],
["demo", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, html: {include: "demographics.html" }} ],
["instruction_check", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: "Click here to start", html: {include: "instruction_check.html" }} ],
["debrief", "Form", {hideProgressBar: true, countsForProgressBar: false, consentRequired: true, continueMessage:"Click here to continue", html: {include: "debrief_harvard.html" }} ],
["exit", "Form", {consentRequired: false, continueMessage:"Click here to continue", html: {include: "exit.html" }} ],
["setcounter", "__SetCounter__", { }],

    
// Coco Study: Norming all words from the story (word-by-word)
    
["coco-cloze",   
                     "AY_Form", {html: {include: "Discourse_Cloze_pt1.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo1.html"}},
                     "QuestionAlt",{q:"What does everyone call Tulena?", 
                                    as:[["s","Hit 's' for 'Lena'"],["k","Hit 'k' for 'Tully'"]],hasCorrect: 1},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt2.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo2.html"}},
                     "QuestionAlt",{q:"What is Ronald Gonzaga’s nickname?", 
                                    as:[["s","Hit 's' for 'Rocket'"],["k","Hit 'k' for 'Spaceship'"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt3.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo3.html"}},
                     "QuestionAlt",{q:"What color are Tully’s pants?", 
                                    as:[["s","Hit 's' for' 'Brown'"],["k","Hit 'k' for 'Yellow'"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt4.html"}},
                     "QuestionAlt",{q:"Who is Mr. Hornswoggle?", 
                                    as:[["s","Hit 's' for 'The librarian'"],["k","Hit 'k' for 'The principal'"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt4b.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo4.html"}},
                     "QuestionAlt",{q:"Where did Tully find the white hair on Megan?", 
                                    as:[["s","Hit 's' for 'On her shoe'"],["k","Hit 'k' for 'On her sweater'"]],hasCorrect: 1},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt5.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo5.html"}},
                     "QuestionAlt",{q:"What does Coco’s shell look like?", 
                                    as:[["s","Hit 's' for 'A flower'"],["k","Hit 'k' for 'A map'"]],hasCorrect: 1},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt6.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo6.html"}},
                     "QuestionAlt",{q:"Where did they find Javier?", 
                                    as:[["s","Hit 's' for 'On the swings'"],["k","Hit 'k' for 'On the slide'"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt7.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo7.html"}},
                     "QuestionAlt",{q:"What is one of Tully’s favorite games?", 
                                    as:[["s","Hit 's' for 'Tennis'"],["k","Hit 'k' for 'Dodgeball'"]],hasCorrect: 1},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt8.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo8.html"}},
                     "QuestionAlt",{q:"What did the library smell like?", 
                                    as:[["s","Hit 's' for 'Dusty old books'"],["k","Hit 'k' for 'Brand-new books'"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt9.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo9.html"}},
                     "QuestionAlt",{q:"Who is the turtlesnatcher?", 
                                    as:[["s","Hit 's' for 'Megan'"],["k","Hit 'k' for 'Emily'"]],hasCorrect: 1}],
                     
    
    
];

                        




