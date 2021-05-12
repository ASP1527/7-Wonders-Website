//variables
var titles = ["Great Wall of China", "Chichén Itzá", "Machu Picchu", "Petra", "Christ The Redeemer", "Taj Mahal", "The Colosseum"];
var descriptions = [
    ['Located in China, this wonder has almost been around for 2,700 years.', 'This wall was initially built as several different walls protecting different provinces of China from nomadic invadors.', 'Qin Shi Huang, also called the First Emperor, united China by uniting all of the existing walls into one.', 'Each emperor after then focused on strengthening the wall.', 'From the Ming dynasty onward, the wall was fortified with watchtowers & platforms.', 'The wall itself measures 4,000km long (2,500 miles).', 'In China, the wall is called Wann Li Chang Cheng. That means Long Wall of 10,000 Li. A li equals 0.3 of a mile.', 'It has a width spanning from 6.5m at the base to 5m at the top.', "After Chinese rule was extended to Mongolia, the wall itself lost it's importance as a defence and rather became a symbol of culture.", 'Only 8.2 percent of the wall is in good condition.'], 
    ['This wonder is located in the heart of the Mayan empire in Mexico.', 'Chichen Itza contains pyramids, temples & other sophisticated, sacred, stone structures.', 'Consisting of 365 steps, this wonderful Mayan masterpiece is a representation of each day of the year. Each of the 4 sides of this pyramid contains 91 steps followed by one dominant step, the top platform, which makes the 365th.', 'The significance of these steps comes from the devising of the yearly calendar which was one of the feats accomplished by Maya science.', 'During both the spring & autumn equinoxes, a shadow of a serpent appears that joins to a stome serpent head at the base.', 'Located near the site lie wells. These wells have a sacraficial value to the Mayas since they were used to sacrifice young women for their rain God of which they believed to live in the well.', 'Interestingly, hosted at the site is a ball court. The aim of this was to hit a ball through stone hoops on the wall. Losers were sadly executed.'], 
    ['Perched over 2000m high, on the top of the Andes in Peru, lies the Lost city of Machu Picchu.', 'Built in the reign of the first Inca emperor in the mid-15th century, over 200 buildings exquisitely cut and crafted with stone make up this city.', 'The variety of these buildings ranges from homes to temples. ', 'Each building is fed by a channel of fountains and waterways.', 'This baffling series of structures was found in 1911.', 'The Incas built Machu Picchu.', 'It is said to have been a sort of palace built for the first Inca king, Pacchucitu.', 'One of the mysteries regarding this place is how when the Spanish conquered South America, they left Machu Picchu untouched unlike all of the other places the Incas lived in which were demolished.', 'Machu Picchu is thought to be a holy place for the Incas as it is in the middle of four of the mountains that they considered holy.'], 
    ['Deep amid the rugged desert canyons & mountains in Jordan lies a city carved into sandstone cliffs that was once lost to the Western world.', 'Petra was a trading hub located in the heart of the Nabataean empire.', 'Petra is believed to have been around since as early as 9000 B.C..', 'Petra is a huge metropolis of tombs, monuments & other religous structures.', "After trade routes shifted away from Jordan during the Roman empire, the city began to lose it's importance & gradually became abandoned.", 'Petra was found in 1812 when a Swiss scholar dressed as a local & convinced a guide to show him Petra.', 'One of the buildings in Petra is known as the treasury. This is due to the local legend of theives depositing a cache of treasure there a long time ago.', 'During the first crusade, the Christian king of Jerusalem occupied the city, this later changes once Saladin defeated the crusaders and took control of Petra until it slowly became empty.'], 
    ['Commissioned in 1922, this statue overlooks the vibrant city of Rio de Janeiro.', 'The sculpture cost $250,000, donated by individuals from around Brazil.', 'It is 130ft tall.'], 
    ['The Taj Mahal is a mausoleum monument of white marble built in Agra, Uttar Pradesh, India. ', 'It was built between 1631 & 1648 in commemoration of emperor Shah Jahans wife Mumtaz Mahal. ', 'This wonder has been described as a "teardrop on the cheek of time" by an Indian poet (Rabindranath Tagore).', 'This marvelous structure is essentially a testament to the greif & power of the emperor.', 'Sitting above a pink sandstone base, 171m high lies the finial. The finial resembles a mix of the widely diverse region of India that this structure lies in.', 'Both Shah Jahan & his wife are buried in this location.'], 
    ['The colossus Coloseum was constructed between 72 & 80 A.D under the Roman Emperor Vespasian in Ancient Rome.', 'Built by slaves, this magnificent monument was made from stones & concrete.', 'This Coloseum is the largest ampitheater in the world. When used, it hosted around 50,000 spectators that came in through one of the 80 entrances.', 'The variety of entertainment offered in this ampitheater ranged from gladiatorial combat to whild animal hunts and even ship naval battles.', 'One amazing aspect of this event was its price: free. Free for entrants & free for spectators who sometimes recieved free food. ', 'This event was mainly free as a means for the emperors to gain popularity.', 'The main source of gladiators were slaves, criminals & prisoners. Sometimes, the gladiators were promised freedom upon a victory & on other occasions, left in the arena unarmed (if they were senteced to death).', 'The first games held here were under Emperor Titus, the son of Vespasian in 80 A.D for 100 days straight.', 'On sunny days, the velarium was used. It was an awning that would be pulled over the seating area for shade.', 'Under the arena lied underground rooms and passages used by the animals & gladiators. Above, in the arena were 36 trap doors that were used for special affects.'],
];
var images = [
    "https://www.workandliveinchina.com/wp-content/uploads/2019/06/Beautiful-China-Great-Wall.jpg", 
    "https://miro.medium.com/max/12000/0*fx2ZHnS7Qd-GkQrv", 
    "https://static.onecms.io/wp-content/uploads/sites/28/2016/09/machu-PICCHU0916-2000.jpg", 
    "https://igcat.org/wp-content/uploads/2015/06/jordan1.jpg",
    "http://4.bp.blogspot.com/-yA1inFreZAQ/Uei0hFMHFsI/AAAAAAAAHMY/rTic90zSDmk/s1600/BrasilCorcovadoStatue.jpg", 
    "https://lp-cms-production.imgix.net/2020-11/GettyRF_494057771.jpg", 
    "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg"
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