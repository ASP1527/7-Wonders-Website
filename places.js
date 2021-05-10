//variables
var titles = ["Great Wall of China", "Chichén Itzá", "Petra", "Machu Picchu", "Christ The Redeemer", "Taj Mahal", "The Colosseum", "Great Pyramid Of Giza"];
var descriptions = [["built in x", "for this"], ["built in y", "for someone"], ["built in x", "for this"], ["built in y", "for someone"], ["built in x", "for this"], ["built in x", "for this"], ["built in y", "for someone"], ["built in x", "for this"], ["built in y", "for someone"]];
var images = [
    "https://www.workandliveinchina.com/wp-content/uploads/2019/06/Beautiful-China-Great-Wall.jpg", 
    "https://miro.medium.com/max/12000/0*fx2ZHnS7Qd-GkQrv", 
    "https://igcat.org/wp-content/uploads/2015/06/jordan1.jpg", 
    "https://static.onecms.io/wp-content/uploads/sites/28/2016/09/machu-PICCHU0916-2000.jpg", 
    "http://4.bp.blogspot.com/-yA1inFreZAQ/Uei0hFMHFsI/AAAAAAAAHMY/rTic90zSDmk/s1600/BrasilCorcovadoStatue.jpg", 
    "https://lp-cms-production.imgix.net/2020-11/GettyRF_494057771.jpg", 
    "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg", 
    "https://i.natgeofe.com/n/535f3cba-f8bb-4df2-b0c5-aaca16e9ff31/giza-plateau-pyramids.jpg"
];


//function that loops through every title and creates a div container with the corresponding information and inserts it into the page before the div with a class divOut
function getInfo() {
    for (i = 0; i < titles.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("main");
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
        var image = document.createElement("div");
        image.classList.add("image");
        var x = 'url(' + '"' + images[i] + '"' + ')'
        image.style.background = x;
        image.style.backgroundSize = "cover"
        newDiv2.append(image);
        newDiv2.appendChild(list);
        newDiv.appendChild(newDiv2);
        var currentDiv = document.getElementById("divOut");
        document.body.insertBefore(newDiv, currentDiv);
        console.log(newDiv);
    } 
}

//function calls
getInfo()