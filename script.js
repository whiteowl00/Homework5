

var currentDay = document.querySelector("#currentday")
var currentTime = document.querySelector("#currenttime")

currentDay.textContent = moment().format('MMMM Do YYYY')

currentTime.textContent = moment().format('LT')

function color() {
    for ( var i=9; i<18; i++) {
        var time = i
        if (time == moment().format('H')) {
            $("#time"+ i).addClass("present").removeClass("past", )
        }
        if (time < moment().format('H')) {
            $("#time"+ i).addClass("past")
        }
        if (time > moment().format('H')) {
            $("#time"+ i).addClass("future")
        }
    }
}
color();

$("#save-btn1").on("click", () => localStorage.text1 = $("#text1").val())
$("#save-btn2").on("click", () => localStorage.text2 = $("#text2").val())
$("#save-btn3").on("click", () => localStorage.text3 = $("#text3").val())
$("#save-btn4").on("click", () => localStorage.text4 = $("#text4").val())
$("#save-btn5").on("click", () => localStorage.text5 = $("#text5").val())
$("#save-btn6").on("click", () => localStorage.text6 = $("#text6").val())
$("#save-btn7").on("click", () => localStorage.text7 = $("#text7").val())
$("#save-btn8").on("click", () => localStorage.text8 = $("#text8").val())
$("#save-btn9").on("click", () => localStorage.text9 = $("#text9").val())

function saveTask() {
    for (let i=1; i<10; i++)
    $("#text"+ i).val(localStorage.getItem("text"+ i))
}
saveTask()