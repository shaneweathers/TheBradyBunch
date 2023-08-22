"use strict";
$(document).ready(() => {
    $("#faqs h3").click(evt => {
        $(evt.currentTarget).toggleClass("minus");
        $(evt.currentTarget).next().slideToggle(1000);
    });  
});
