console.log("Hello, we're in authentication.js");

/**
 * Handles the sign in button press.
 */
function toggleSignIn() {
    console.log("In toggleSignIn");
    console.log(firebase.auth().currentUser);
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
    } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            // if (document.getElementById('signin') !== null) {
            //     document.getElementById('signin').disabled = false;
            // }
            
            // [END_EXCLUDE]
        });
        // [END authwithemail]
    }

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            window.location.href = "topics.html";
        }
    });
    // if (document.getElementById('signin') !== null) {
    //     document.getElementById('signin').disabled = true;
    // }
}

/**
 * Handles the sign up button press.
 */
function handleSignUp() {
    console.log("in handleSignUp");
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
    }
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Create user with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        return;
        // [END_EXCLUDE]
    });
    // [END createwithemail]
    var isSomeoneSignedIn = firebase.auth().currentUser;
    console.log(isSomeoneSignedIn);
    if (isSomeoneSignedIn) {
        location.href="profile.html";
    }
}

/**
 * Sends an email verification to the user.
 */
function sendEmailVerification() {
    console.log("in sendemailverification");
    // [START sendemailverification]
    firebase.auth().currentUser.sendEmailVerification().then(function () {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
    });
    // [END sendemailverification]
}

function sendPasswordReset() {
    console.log("in sendPasswordReset");
    var email = document.getElementById('email').value;
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function () {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END sendpasswordemail];
}

/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
    console.log("in initApp");
    var signin = document.getElementById('signin');
    var signup = document.getElementById('signup');
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
        }
        // [START_EXCLUDE silent]
        if (signin !== null) {
            document.getElementById('signin').disabled = false;
        }       
        // [END_EXCLUDE]
    });
    // [END authstatelistener]

    if (signin !== null) {
        document.getElementById('signin').addEventListener('click', toggleSignIn, false);
    }
    if (signup !== null) {
        document.getElementById('signup').addEventListener('click', handleSignUp, false);
    }
}

window.onload = function () {
    initApp();
};