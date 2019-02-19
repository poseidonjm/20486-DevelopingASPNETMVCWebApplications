﻿var percentIncrement;
var percentCurrent = 100;

function slideSwitch() {
    percentCurrent += percentIncrement;
    if (percentCurrent > 100) {
        percentCurrent = percentIncrement;
    }
    $("#slide-show-progress-bar").progressbar({ value: percentCurrent });
    var $activeCard = $("#slide-show div.active-card")

    if ($activeCard.length == 0) {
        $activeCard = $("#slide-show div.slide-show-card:last")
    }
    $nextCard = $activeCard.next();

    if ($nextCard.length == 0) {
        $nextCard = $("#slide-show div.slide-show-card:first")
    }

    $activeCard.addClass("last-active-card");

    $nextCard.css({ opacity: 0.0 });

    $nextCard.addClass("active-card");

    $nextCard.animate({ opacity: 1.0 }, 1000, function () {
        $activeCard.removeClass("active-card last-active-card");
    });
}

function calculateIncrement() {
    var cardCount = $("#slide-show DIV.slide-show-card").length;
    percentIncrement = 100 / cardCount;
    $("#slide-show-progress-bar").progressbar({value: 100});
}

$(document).ready(function () {
    calculateIncrement();
    setInterval("slideSwitch()", 5000)
});