// console.log("Hello");
// $(document).ready(function() {
//     console.log($(".saveBtn"))
// })

var currentDay = document.getElementById("currentDay")
moment().day(7|currentDay);

console.log(moment().date());
var dayOfWeek = moment().day();
var dateOfWeek = moment().date();
var day = moment().day(dayOfWeek);

var currentDay2 = moment(day).format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log (moment(day).format("dddd, MMMM Do YYYY, h:mm:ss a"))

$(currentDay).append(currentDay2);

//var events = JSON.parse(localStorage.getItem("saved events"));

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);

    })

    function timeTracker () {
        var currentDay2 = moment(day).format("dddd, MMMM Do YYYY, h:mm:ss a")

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < currentDay2) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === currentDay2) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    timeTracker();

    $("#1 .description").val(localStorage.getItem("1"));
    $("#2 .description").val(localStorage.getItem("2"));
    $("#3 .description").val(localStorage.getItem("3"));
    $("#4 .description").val(localStorage.getItem("4"));
    $("#5 .description").val(localStorage.getItem("5"));
    $("#6 .description").val(localStorage.getItem("6"));
    $("#7 .description").val(localStorage.getItem("7"));
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));

})