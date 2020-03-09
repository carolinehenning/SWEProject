'use strict';

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("welcome").innerHTML = user.email;
    }
    console.log(user.email);
});

// Behavior for clicking on the 'Current Topics' Heading... right now this redirects to the homepage.
// we will want to adjust this later, but now we have a way to return home
document.querySelector('#what-interests-you').onclick = function() {
    window.location.replace('../index.html');
}

document.querySelector('#s-and-t').onclick = function() {
    window.location.replace('../index.html');
}

document.querySelector('#music').onclick = function() {
    window.location.replace('../index.html');
}

document.querySelector('#politics').onclick = function() {
    window.location.replace('../index.html');
}

document.querySelector('#news').onclick = function() {
    window.location.replace('../index.html');
}

document.querySelector('#film').onclick = function() {
    window.location.replace('../index.html');
}

document.querySelector('#sports').onclick = function() {
    window.location.replace('../index.html');
}

/* ideally we want to change to this sort of format to reduce identical code. could not get this to work
let sNT = document.querySelector("#s-and-t");
sNT.onclick = redirect('index.html');

function redirect(page) {
    window.location.replace(page);
} */