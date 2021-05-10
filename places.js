//variables
var titles = ["Great Wall of China", "Chichén Itzá", "Petra", "Machu Picchu", "Christ The Redeemer", "Taj Mahal", "The Colloseum", "Great Pyramid Of Giza"];
var descriptions = [["built in x", "for this"], ["built in y", "for someone"], ["built in x", "for this"], ["built in y", "for someone"], ["built in x", "for this"], ["built in x", "for this"], ["built in y", "for someone"], ["built in x", "for this"], ["built in y", "for someone"]]
// var images = [[], []]


//function that loops through every title and creates a div container with the corresponding information and inserts it into the page before the div with a class divOut
function getInfo() {
    for (i = 0; i < titles.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("main");
        if (i % 2 === 0) {
            newDiv.classList.add("left");
        } else {
            newDiv.classList.add("right");
        }
        var newDiv2 = document.createElement("div");
        newDiv2.classList.add("element");
        var head = document.createElement("h1");
        head.innerText = titles[i];
        newDiv2.appendChild(head);
        var description = descriptions[i];
        var list = document.createElement("div");
        list.classList.add("facts");
        for (j = 0; j < description.length; j++) {
            var item = document.createElement("p");
            item.innerText = description[j];
            list.appendChild(item);
        }
        newDiv2.appendChild(list);
        newDiv.appendChild(newDiv2);
        var currentDiv = document.getElementById("divOut");
        document.body.insertBefore(newDiv, currentDiv);
        console.log(newDiv);
    } 
}

//function calls
getInfo()