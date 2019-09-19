/*  Project 01_11_02

    Author: Alex A Somoza
    Date:  9-18-19 

    Filename: script.js
*/

"use strict";


var httpRequest = false;
var entry = "IXIC";

function getRequestObject() {
    try {
        httpRequest = new XMLHttpRequest();
    } catch (requestError) {
        return false;
    }
    alert(httpRequest);
    return httpRequest;
}

function stopSubmission(evt) {
    alert("stopSubmission()");
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }

    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("onsubmit", stopSubmission, false);
        window.addEventListener("load", getRequestObject, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", stopSubmission);
        window.attachEvent("onload",getRequestObject);
    }
}




// if (window.addEventListener) {
//     window.addEventListener("load", getRequestObject, false);
// }
// else if (window.attachEvent) {
//     window.attachEvent("onload", getRequestObject);
// }
