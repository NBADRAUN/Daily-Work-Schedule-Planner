///global variables ////
var now = dayjs(); //current time using datjs 3rd party API /////
var currenthour = now.format("H"); ///converts now to hour number///
var pastclass = "row time-block past"; ///html id when time is past //
var futureclass = "row time-block future"; //html id when time is future//
var presentclass = "row time-block present"; //html id when time is present//
var savebtn = document.getElementsByTagName("button"); //html tag tied to the save buttons///
var textarea = document.getElementsByTagName("textarea"); //html tag name for the text area///
var added = document.getElementById('added'); 
hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]; //hours array
hourelement = [
  //hour elements array///
  "#hour-9",
  "#hour-10",
  "#hour-11",
  "#hour-12",
  "#hour-13",
  "#hour-14",
  "#hour-15",
  "#hour-16",
  "#hour-17",
  "#hour-18",
];

//current date and time in the header class///
function updateTime() {
  var now = dayjs();
  var date = now.format("MMM D, YYYY");
  var time = now.format("h:mm:ss A");
  $("#time").text(date + " " + time);
}

/// function to remove the text in the header that the local storage had been updated//
function removeupdatetext(){
  added.innerHTML = ("");
}

///setting timer intervals ////
setInterval(updateTime, 1000);
setInterval(setColors,3,600,000);
setInterval(removeupdatetext,4000); 


//// loop to determind if hours are less than current hour////
function setColors() {
  for (let i = 0; i < hours.length; i++) {
    var houriterate = hours[i];
    if (currenthour > houriterate) {
      $(hourelement[i]).removeClass(futureclass).addClass(pastclass);
    }
  }
  //// loop to determine if hours are equal to current hour //////
  for (let i = 0; i < hours.length; i++) {
    var houriterate = hours[i];
    if (currenthour == houriterate) {
      $(hourelement[i]).removeClass(futureclass).addClass(presentclass);
    }
  }
}

///writes the text box values to the local storage ///
for (let i = 0; i < savebtn.length; i++) {
  savebtn[i].addEventListener("click", function () {
    localStorage.setItem(hourelement[i], textarea[i].value);
    added.innerHTML = ("Event added/updated in local storage &#9989");

});
}

/// gets item value for each text area in local storage and displays//
for (let i = 0; i < hourelement.length; i++) {
  // console.log(localStorage.getItem(hourelement[i],(textarea[i].value)));
  textarea[i].innerHTML = localStorage.getItem(
    hourelement[i],
    textarea[i].value
  );
}

//// Notes from starter Code ////
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
