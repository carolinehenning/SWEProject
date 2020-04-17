var topics = [];
var scienceBox = document.getElementById("Science");
var techBox = document.getElementById("Technology");
var filmBox = document.getElementById("Film");
var musicBox = document.getElementById("Music");
var foodBox = document.getElementById("Food");
var travelBox = document.getElementById("Travel");
var literatureBox = document.getElementById("Literature");
var wellnessBox = document.getElementById("Wellness");

if (!firebase.apps.length) {
firebase.initializeApp({
  apiKey: 'AIzaSyCu20JG8AjK8WkSykOnDx1EMABwpeETtgQ',
  authDomain: 'swe-project-63ce1.firebaseapp.com',
  projectId: 'swe-project-63ce1'
});
}

var db = firebase.firestore();

if (scienceBox !== null) {
	scienceBox.addEventListener('change', () => {
		if(scienceBox.checked) {
			//add to list of topics of interest
    		if (topics.length === 4) {
    			document.getElementById(topics[3]).click();
    		}
    		topics.push("Science");
  		} else {
  			//remove
  			var i = 0;
  			while (topics[i] != "Science") ++i;
  			topics.splice(i,1);
  		}
	});
}
if (techBox !== null) {
	techBox.addEventListener('change', () => {
		if(techBox.checked) {
    		if (topics.length === 4) {
    			document.getElementById(topics[3]).click();
    		}
    		topics.push("Technology");
  		} else {
  			//remove
  			var i = 0;
  			while (topics[i] != "Technology") ++i;
  			topics.splice(i,1);
  		}
	});
}
if (filmBox !== null) {
	filmBox.addEventListener('change', () => {
		if(filmBox.checked) {
    		if (topics.length === 4) {
    			document.getElementById(topics[3]).click();
    		}
    		topics.push("Film");
  		} else {
  			//remove
  			var i = 0;
  			while (topics[i] != "Film") ++i;
  			topics.splice(i,1);
  		}
	});
}
if (musicBox !== null) {
	musicBox.addEventListener('change', () => {
		if(musicBox.checked) {
    		if (topics.length === 4) {
    			document.getElementById(topics[3]).click();
    		}
    		topics.push("Music");
  		} else {
  			//remove
  			var i = 0;
  			while (topics[i] != "Music") ++i;
  			topics.splice(i,1);
  		}
	});
}
if (foodBox !== null) {
	foodBox.addEventListener('change', () => {
		if(foodBox.checked) {
    		if (topics.length === 4) {
    			document.getElementById(topics[3]).click();
    		}
    		topics.push("Food");
  		} else {
  			//remove
  			var i = 0;
  			while (topics[i] != "Food") ++i;
  			topics.splice(i,1);
  		}
	});
}
if (travelBox !== null) {
	travelBox.addEventListener('change', () => {
		if(travelBox.checked) {
    		if (topics.length === 4) {
    			document.getElementById(topics[3]).click();
    		}
    		topics.push("Travel");
  		} else {
  			//remove
  			var i = 0;
  			while (topics[i] != "Travel") ++i;
  			topics.splice(i,1);
  		}
	});
}
if (literatureBox !== null) {
	literatureBox.addEventListener('change', () => {
		if(literatureBox.checked) {
    		if (topics.length === 4) {
    			document.getElementById(topics[3]).click();
    		}
    		topics.push("Literature");
  		} else {
  			//remove
  			var i = 0;
  			while (topics[i] != "Literature") ++i;
  			topics.splice(i,1);
  		}
	});
}
if (wellnessBox !== null) {
	wellnessBox.addEventListener('change', () => {
		if(wellnessBox.checked) {
    		if (topics.length === 4) {
    			document.getElementById(topics[3]).click();
    		}
    		topics.push("Wellness");
  		} else {
  			//remove
  			var i = 0;
  			while (topics[i] != "Wellness") ++i;
  			topics.splice(i,1);
  		}
	});
}

function toFeed() {
  var user = firebase.auth().currentUser;
  if (user != null) {
    db.collection("topics").add({
      userEmail: user.email,
      topicList: topics
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }
	window.location.href = "works.html";
}
