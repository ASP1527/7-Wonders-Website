//variables
var titles = ["Great Wall of China", "Chichén Itzá", "Machu Picchu", "Petra", "Christ The Redeemer", "Taj Mahal", "The Colosseum", "Great Pyramid Of Giza"];
var descriptions = [
    ['Located in China, this wonder has almost been around for 2,700 years.', 'This wall was initially built as several different walls protecting different provinces of China from nomadic invadors.', 'Qin Shi Huang, also called the First Emperor, united China by uniting all of the existing walls into one.', 'Each emperor after then focused on strengthening the wall.', 'From the Ming dynasty onward, the wall was fortified with watchtowers & platforms.', 'The wall itself measures 4,000km long (2,500 miles).', 'In China, the wall is called Wann Li Chang Cheng. That means Long Wall of 10,000 Li. A li equals 0.3 of a mile.', 'It has a width spanning from 6.5m at the base to 5m at the top.', "After Chinese rule was extended to Mongolia, the wall itself lost it's importance as a defence and rather became a symbol of culture.", 'Only 8.2 percent of the wall is in good condition.'], 
    ['This wonder is located in the heart of the Mayan empire in Mexico.', 'Chichen Itza contains pyramids, temples & other sophisticated, sacred, stone structures.', 'Consisting of 365 steps, this wonderful Mayan masterpiece is a representation of each day of the year. Each of the 4 sides of this pyramid contains 91 steps followed by one dominant step, the top platform, which makes the 365th.', 'The significance of these steps comes from the devising of the yearly calendar which was one of the feats accomplished by Maya science.', 'During both the spring & autumn equinoxes, a shadow of a serpent appears that joins to a stome serpent head at the base.', 'Located near the site lie wells. These wells have a sacraficial value to the Mayas since they were used to sacrifice young women for their rain God of which they believed to live in the well.', 'Interestingly, hosted at the site is a ball court. The aim of this was to hit a ball through stone hoops on the wall. Losers were sadly executed.'], 
    ["built in x", "for this"], 
    ["built in y", "for someone"], 
    ["built in x", "for this"], 
    ["built in x", "for this"], 
    ["built in y", "for someone"],
    ["built in x", "for this"], 
    ["built in y", "for someone"]
];
var images = [
    "https://www.workandliveinchina.com/wp-content/uploads/2019/06/Beautiful-China-Great-Wall.jpg", 
    "https://miro.medium.com/max/12000/0*fx2ZHnS7Qd-GkQrv", 
    "https://static.onecms.io/wp-content/uploads/sites/28/2016/09/machu-PICCHU0916-2000.jpg", 
    "https://igcat.org/wp-content/uploads/2015/06/jordan1.jpg", 
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