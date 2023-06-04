//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAYpEPn9dqQVLu8YsZ4a4NfKb5mmuBP-CI",
      authDomain: "let-chat-app-dad28.firebaseapp.com",
      databaseURL: "https://let-chat-app-dad28-default-rtdb.firebaseio.com",
      projectId: "let-chat-app-dad28",
      storageBucket: "let-chat-app-dad28.appspot.com",
      messagingSenderId: "169590894580",
      appId: "1:169590894580:web:16d5225f2fde3b740b13a1"
    };
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("roomname");
user_name = localStorage.getItem("username");

console.log("room name", room_name);
console.log("user name", user_name);

function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
      
      }

      function send(){
          msg = document.getElementById("msg").Value;
          console.log("Message"+msg);
          firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
          });
            
          document.getElementById("msg").value = "";
      }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
