//YOUR FIREBASE LINKS

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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) 
            { document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        function send() {
                              msg = document.getElementById("msg").value;
                              firebase.database().ref(room_name).push({
                                    name: user_name,
                                    message: msg,
                                    likes: 0
                              });
                              document.getElementById("msg").value = "";
                        }

                        //End code
                  }
            });
      });
}
getData();