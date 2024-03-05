
var firebaseConfig = {
  apiKey: "AIzaSyAUwUp_vd1UafTxT9Rifykobi3Cv3UiNJU",
  authDomain: "kwitter-20a26.firebaseapp.com",
  databaseURL: "https://kwitter-20a26-default-rtdb.firebaseio.com",
  projectId: "kwitter-20a26",
  storageBucket: "kwitter-20a26.appspot.com",
  messagingSenderId: "293422827602",
  appId: "1:293422827602:web:5e94be4e2f2ea5ac58b78b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - ", Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  })

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter-page.html";
}

function redirectToRoomName()
{
  console.log(name);
  localStorage.setItem("Room name", name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter_page.html";
}