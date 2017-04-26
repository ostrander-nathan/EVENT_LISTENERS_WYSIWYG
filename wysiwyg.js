var zepp = [{
    title: "Lead Guitar",
    name: "Jimmy Page",
    bio: "Playing guitar while a acitve member in the cult of pony tail enthusiast.",
    image: "http://www.theglobeandmail.com/arts/music/article25802019.ece/BINARY/w940/image.jpg",
    lifespan: {
        birth: 1957,
        death: 2345
    }
}, {
    title: "Lead Singer",
    name: "Robert Plant",
    bio: "Singing classic rock songs and wearing shirts that shows a bounty of chest hair.",
    image: "http://static.tumblr.com/6741800edc5bac8e1649df8b2901420d/a38zs7m/019mx47u2/tumblr_static_robert_plant02.jpg",
    lifespan: {
        birth: 1965,
        death: 2200
    }
}, {
    title: "Bass Player",
    name: "John Paul Jones",
    bio: "Rockin the bass and a Lord of the Rings extra.",
    image: "http://2.bp.blogspot.com/-mASst_vcqCw/Urduz8c3uPI/AAAAAAAAarQ/0eS6QtSH3JI/s1600/John-Paul-Jones-Led-Zeppelin-Rolex-GMT-Master-Two-Tone.jpg",
    lifespan: {
        birth: 1961,
        death: 2222
    }
}, {
    title: "Drummer",
    name: "John Bonham",
    bio: "Banging on drums while sporting a heafty stache is how he rolled.",
    image: "http://www.drummagazine.com/images/lessons/120711-Bonzo-B&W.jpg",
    lifespan: {
        birth: 1948,
        death: 1980
    }
}];

var myDisplay = document.getElementById('person');
var counter = 0;
var myArray;
var contentToDisplay = "";

for (; counter < zepp.length; counter++) {
    myArray = zepp[counter];
    contentToDisplay += `<div class="person__container" id="person--${counter}">`;
    contentToDisplay += `<div class= "title">${myArray.title}</div>`;

    contentToDisplay += `<div class= "name">${myArray.name}</div>`;

    contentToDisplay += `<div class= "bio">${myArray.bio}</div>`;

    contentToDisplay += `<div class= "image"> src="${myArray.image}"</div>`;

    contentToDisplay += "Birth:" + `<div class= "lifespan">${myArray.lifespan.birth}</div>`;

    contentToDisplay += "Death:" + `<div class= "lifespan">${myArray.lifespan.death}</div>`;

    contentToDisplay += "</div>";
    myDisplay.innerHTML = contentToDisplay;
};

var containerEl = document.getElementsByClassName("person__container");
var inputBox = document.getElementById('input');
var targetToEdit;

for (var i = 0; i < containerEl.length; i++) {
    var targetEmt = containerEl[i];
    targetEmt.addEventListener("click", function(event) {
        this.classList.toggle("border");
        inputBox.focus();
        inputBox.value = this.childNodes[2].innerHTML;
        targetToEdit = this;
        inputBox.addEventListener("keyup", textInput)
    });
    targetEmt.addEventListener("mouseout", function(event) {

        inputBox.removeEventListener("keyup", textInput);

    });
};

function textInput(e) {
    targetToEdit.childNodes[2].innerHTML = inputBox.value;
    if (e.keyCode === 13) {
        inputBox.removeEventListener("keyup", textInput);
    }
}
