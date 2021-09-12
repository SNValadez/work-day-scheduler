console.log("Hello");
$(document).ready(function() {
    console.log($(".saveBtn"))
})

var currentDay = document.getElementById("currentDay")
moment().day(7|currentDay);

console.log(moment().date());
var dayOfWeek = moment().day();
var dateOfWeek = moment().date();
var day = moment().day(dayOfWeek);

var currentDay2 = moment(day).format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log (moment(day).format("dddd, MMMM Do YYYY, h:mm:ss a"))

$(currentDay).append(currentDay2);