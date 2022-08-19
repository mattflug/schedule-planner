// global variables
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var currentTime = dayjs().format("MM DD YYYY");
var schedule = parseInt(dayjs().format("HH"));

$("#currentDay").text(currentTime);
function createTimeBlock(hour) {
  var t1 = hour.substr(-2);
  var t2 = parseInt(hour.split(t1)[0]);
  if (t2 > 0 && t2 < 6) {
    t2 = 12 + t2;
  }

  // console.log(t2, schedule);
  var rowDiv = $("<div>");
  var timeE = $("<p>");
  var textE = $("<textarea>");
  var buttonE = $("<button>");
  // adding class for each new variable
  rowDiv.addClass("time-block row");
  timeE.addClass("hour");
  textE.addClass("description");
  if (t2 < schedule) {
    textE.addClass("past");
  } else if (t2 === schedule) {
    textE.addClass("present");
  } else {
    textE.addClass("future");
  }
  buttonE.addClass("saveBtn");
  // adding text to my rows
  timeE.text(hour);
  textE.text(localStorage.getItem(hour));
  buttonE.text("Save");
  // apprnfing elements
  rowDiv.append(timeE);
  rowDiv.append(textE);
  rowDiv.append(buttonE);
  // appending rowDiv to class container
  $(".container").append(rowDiv);
}
// for loop for rows and change time
for (let index = 0; index < 9; index++) {
  createTimeBlock(hours[index]);
}

$(".saveBtn").on("click", function () {
  var entry = $(this).siblings("textarea").val();
  var timeBlock = $(this).siblings("p").text();
  console.log(entry, timeBlock);
  localStorage.setItem(timeBlock, entry);
});
