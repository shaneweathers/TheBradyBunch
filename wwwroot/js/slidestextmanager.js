"use strict";
$(document).ready(() => {
    const nextSlide = $("#first-image"); 
        //const nextSlideSource = nextSlide.attr("src");
        const nextCaption = nextSlide.attr("alt");
        //const nextTitle = nextSlide.attr("title");
        const nextParagraph1 = nextSlide.attr("p1");
        const nextParagraph2 = nextSlide.attr("p2");
        //$("#slide").attr("src", nextSlideSource);
        //$("#slide").attr("alt", nextCaption);
        //$("#slide").attr("title", nextTitle);
        $("#caption").text(nextCaption);  
        $("#p1").text(nextParagraph1).fadeIn(1000); 
        $("#p2").text(nextParagraph2).fadeIn(1000);         
    }); 

    