var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var currentTime = dayjs().format("MM DD YYYY");
$("#currentDay").text(currentTime);
function createTimeBlock(hour) {
  var rowDiv = $("<div>");
  var timeE = $("<p>");
  var textE = $("<textarea>");
  var buttonE = $("<button>");
  //
  rowDiv.addClass("time-block row");
  timeE.addClass("hour");
  textE.addClass("description");
  buttonE.addClass("saveBtn");
  //
  timeE.text(hour);
  textE.text("taskexeample");
  buttonE.text("save");
  //
  rowDiv.append(timeE);
  rowDiv.append(textE);
  rowDiv.append(buttonE);
  //
  $(".container").append(rowDiv);
}
for (let index = 0; index < 9; index++) {
  createTimeBlock(hours[index]);
}
