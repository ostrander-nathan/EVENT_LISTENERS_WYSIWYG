var zepp = [
{
  title: "Lead Guitar",
  name: "Jimmy Page",
  bio: "Playing guitar while a acitve member in the cult of pony tail enthusiast.",
  image: "http://www.theglobeandmail.com/arts/music/article25802019.ece/BINARY/w940/image.jpg",
  lifespan: {
    birth: 1957,
    death: 2345
  }
},
{
  title: "Lead Singer",
  name: "Robert Plant",
  bio: "Singing classic rock songs and wearing shirts that shows a bounty of chest hair.",
  image: "http://static.tumblr.com/6741800edc5bac8e1649df8b2901420d/a38zs7m/019mx47u2/tumblr_static_robert_plant02.jpg",
  lifespan: {
    birth: 1965,
    death: 2200
  }
},
{
  title: "Bass Player",
  name: "John Paul Jones",
  bio: "Rockin the bass and a Lord of the Rings extra.",
  image: "http://2.bp.blogspot.com/-mASst_vcqCw/Urduz8c3uPI/AAAAAAAAarQ/0eS6QtSH3JI/s1600/John-Paul-Jones-Led-Zeppelin-Rolex-GMT-Master-Two-Tone.jpg",
  lifespan: {
    birth: 1961,
    death: 2222
  }
},
{
  title: "Drummer",
  name: "John Bonham",
  bio: "Banging on drums while sporting a heafty stache is how he rolled.",
  image: "http://www.drummagazine.com/images/lessons/120711-Bonzo-B&W.jpg",
  lifespan: {
    birth: 1948,
    death: 1980
  }
}
];

var myDisplay = document.getElementById('person');
var counter = 0;
var myArray;
var contentToDisplay = "";
	for (; counter < zepp.length; counter++) {
    myArray = zepp[counter];
  // Give each person element a unique identifier
contentToDisplay += `<div class="person__container border" id="person--${counter}">`;
      contentToDisplay+= `<div class= "title">${myArray.title}</div>`;
        // contentToDisplay += myArray.title;
      // contentToDisplay+= "</div>";
      contentToDisplay+= `<div class= "name">${myArray.name}</div>`;
      //   contentToDisplay += myArray.name;
      // contentToDisplay+= "</div>";
      contentToDisplay+= `<div class= "bio">${myArray.bio}</div>`;
      //   contentToDisplay += myArray.bio;
      // contentToDisplay+= "</div>";
      contentToDisplay+= "Birth:" +`<div class= "lifespan">${myArray.lifespan.birth}</div>`;
      //   contentToDisplay += myArray.lifespan.birth;
      // contentToDisplay+= "</div>";
      contentToDisplay+= "Death:" +`<div class= "lifespan">${myArray.lifespan.death}</div>`;
      //   contentToDisplay += myArray.lifespan.death;
      // contentToDisplay+= "</div>";
contentToDisplay+= "</div>";
myDisplay.innerHTML = contentToDisplay;
};
// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  var targetEmt = containerEl[i];
  targetEmt.addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
    event.currentTarget.classList.toggle("border");
    input.focus();
     // logic for mirror input
     var inputBox = document.getElementById('input');
     inputBox.onkeyup = function(){
        // document.getElementById('person').innerHTML = inputBox.value;
        targetEmt.innerHTML = inputBox.value;
        inputBox.removeEventListener("keyup", inputBox);
    }
console.log(event.currentTarget);
  });
};

// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.