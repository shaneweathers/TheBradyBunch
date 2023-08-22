"use strict";

function getQueryString() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
$(document).ready(() => {
    //preload large images
    $("#image-list a").each((index, link) => {
        const image = new Image();
        image.src = link.href;
    });
   
});

