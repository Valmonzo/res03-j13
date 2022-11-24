window.addEventListener("DOMContentLoaded", function(event){

});

/*let firstSection= document.getElementById("red");
let secondSection=document.getElementById("orange");
let thirdSection=document.getElementById("yellow");
let fourthSection=document.getElementById("green");
let fifthSection=document.getElementById("blue");
let sixthSection=document.getElementById("purple");*/


/*let firstPos = firstSection.getBoundingClientRect().top;
let secPos = secondSection.getBoundingClientRect().top;
let thirdPos= thirdSection.getBoundingClientRect().top;
let fourthPos= fourthSection.getBoundingClientRect().top;
let fifthPos = fifthSection.getBoundingClientRect().top;
let sixthPos= sixthSection.getBoundingClientRect().top;*/



let firstSection = document.querySelector("body > main > section#red");
let secondSection = document.querySelector("body > main > section#orange");
let thirdSection = document.querySelector("body > main > section#yellow");
let fourthSection = document.querySelector("body > main > section#green");
let fifthSection = document.querySelector("body > main > section#blue");
let sixthSection = document.querySelector("body > main > section#purple");



/*function nextSection(current) {
    if(current.id === "red")
    {
        return secondSection;
    }
    else if(current.id === "orange")
    {
        return thirdSection;
    }
    else if(current.id === "yellow")
    {
        return fourthSection;
    }
    else if(current.id ==="green")
    {
        return fifthSection;
    }
    else if(current.id ==="blue")
    {
        return sixthSection;
    }
};



function previousSection(current) {
    if(current.id ==="purple")
    {
        return fifthSection;
    }
    else if(current.id ==="blue")
    {
        return fourthSection;
    }
    else if(current.id ==="green")
    {
        return thirdSection;
    }
    else if(current.id ==="yellow")
    {
        return secondSection;
    }
    else if(current.id ==="orange")
    {
        return firstSection;
    }
};

let sections = document.querySelectorAll("body > main > section");

for(let i = 0; i < sections.length; i++)

sections[i].addEventListener("wheel", function(event){

    let currentScrollPosition = document.documentElement.scrollTop;


    if(event.deltaY > 0) // je vais vers le bas
    {
        let goNext = nextSection(event.target);
        scroll(0, currentScrollPosition + goNext.getBoundingClientRect().top);
    }
    else if(event.deltaY < 0) // je vais vers le haut
    {
        let goPrev = previousSection(event.target);
        scroll(0, currentScrollPosition + goPrev.getBoundingClientRect().top);
    }
});
*/

/* -------- EXERCICE 2 ---------- */


/* ---- FONCTIONS POUR RETOURNER L'ID ACTUEL ----- */

function nextSection(current) {
    if(current.id === "red")
    {
        return secondSection;
    }
    else if(current.id === "orange")
    {
        return thirdSection;
    }
    else if(current.id === "yellow")
    {
        return fourthSection;
    }
    else if(current.id ==="green")
    {
        return fifthSection;
    }
    else if(current.id ==="blue")
    {
        return sixthSection;
    }
};



function previousSection(current) {
    if(current.id ==="purple")
    {
        return fifthSection;
    }
    else if(current.id ==="blue")
    {
        return fourthSection;
    }
    else if(current.id ==="green")
    {
        return thirdSection;
    }
    else if(current.id ==="yellow")
    {
        return secondSection;
    }
    else if(current.id ==="orange")
    {
        return firstSection;
    }
};

let sections = document.querySelectorAll("body > main > section");


/* ----- BOUCLE POUR SCROLL ENTRE LES SECTIONS ----- */
for(let i = 0; i < sections.length; i++) {

    let scrollUP = 0
    let scrollDown = 0

sections[i].addEventListener("wheel", function(event){

    let currentScrollPosition = document.documentElement.scrollTop;


    if(event.deltaY > 0) // je vais vers le bas
    {
        let goNext = nextSection(event.target);

        scrollDown++;

            if(scrollDown == 3) {
                scroll(0, currentScrollPosition + goNext.getBoundingClientRect().top);
                scrollDown = 0;
            }
    }
    else if(event.deltaY < 0) // je vais vers le haut
    {
        let goPrev = previousSection(event.target);

        scrollUp++;

            if(scrollUp==3) {
                scroll(0, currentScrollPosition + goPrev.getBoundingClientRect().top);
                scrollUp=0;
            }
    }
});

