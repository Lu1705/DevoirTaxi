"use strict";

let santeMentale = 10;  
let nbFeuxRouge = 30;
let nbChangement = 0;
let musique = "Anissa de Wejdene";

function changerMusique(){// la fonction changer de musique
    nbFeuxRouge--;//elle va faire diminuer de 1 le nombre de feux restant (car la musique change quand on passe un feux rouge)

    const musiqueChoisie = Math.floor(Math.random() * 5) + 1;//un chiffre entre 1 et 5 va être choisi (le chiffre définissant la musique jouée)

    if (musiqueChoisie === 1){//exemple lorsque le chiffre 1 va être choisi, la musique wejdene va être jouée
        musique = "Anissa de Wejdene";
        //lorsque la musique de wejdene est jouée, la santée mentale baisse de 1 et le nombre de changemant de taxi augment de 1
        santeMentale--;
        nbChangement++;
    } else if (musiqueChoisie === 2){//pour les autres musiques il ne se passe rien
        musique = "Hardcoriste de Le Bask";
    } else if (musiqueChoisie === 3){
        musique = "DiE4u de Bring Me The Horizon";
     } else if (musiqueChoisie === 4){
        musique ="La mort avec toi de Gargäntua";
     } else if (musiqueChoisie === 5){
        musique = "Kick Back dekenshi Yonesu";
     }

}


while(santeMentale > 0 && nbFeuxRouge > 0){// tant que ni la santé mentale ni le nombre de feux rouges n'ont atteind 0, la boucle continuera
    changerMusique();//la fonction changerMusique va être lancé
    console.log("La radio joue " + musique + ". Il reste " + nbFeuxRouge + " Feux rouges");
    //et une phrase de résumé va etre lancé pour annoncer la musique jouée et le nombre de feux restant
}

if(santeMentale <= 0){// une fois la boucle terminée, si c'est la santé mentale qui a atteind 0, la phrase de la mort de john va être annoncée
    console.log("John a explosé, il y a eu trop de Wejdene à son goût...");
} else {// sinon la phrase de l'arrivée de john et du nombre de changement de taxi va être annoncée
    console.log("John est bel et bien rentré chez lui. Il a malgré tout dû changer " + nbChangement + " fois de taxi.");
}