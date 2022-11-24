window.addEventListener("DOMContentLoaded", function(event){

});

let firstSection= document.getElementById("red");
let secondSection=document.getElementById("orange");
let thirdSection=document.getElementById("yellow");
let fourthSection=document.getElementById("green");
let fifthSection=document.getElementById("blue");
let sixthSection=document.getElementById("purple");


let firstPos = firstSection.getBoundingClientRect().top;
let secPos = secondSection.getBoundingClientRect().top;
let thirdPos= thirdSection.getBoundingClientRect().top;
let fourthPos= fourthSection.getBoundingClientRect().top;
let fifthPos = fifthSection.getBoundingClientRect().top;
let sixthPos= sixthSection.getBoundingClientRect().top;


let sections = document.querySelectorAll("body > main > section");

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


for(let i = 0; i < sections.length; i++) {

    sections[i].addEventListener("wheel", function(event){

        let currentScrollPosition = document.documentElement.scrollTop;
        let getNext = nextSection(currentScrollPosition);
        let getPrev = previousSection(currentScrollPosition);


    if(event.deltaY > 0) // je vais vers le bas
    {
        scroll(0, currentScrollPosition + getNext.getBoundingClientRect().top);

    }
    else if(event.deltaY < 0) // je vais vers le haut
    {
        scroll(0, currentScrollPosition + getPrev.getBoundingClientRect().top);
    }
});

}

