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
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                
            }
        }
        
        )
    }
}