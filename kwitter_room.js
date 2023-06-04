
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAYpEPn9dqQVLu8YsZ4a4NfKb5mmuBP-CI",
      authDomain: "let-chat-app-dad28.firebaseapp.com",
      databaseURL: "https://let-chat-app-dad28-default-rtdb.firebaseio.com",
      projectId: "let-chat-app-dad28",
      storageBucket: "let-chat-app-dad28.appspot.com",
      messagingSenderId: "169590894580",
      appId: "1:169590894580:web:16d5225f2fde3b740b13a1"
    };


user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function add_room(){
      room_name= document.getElementById("room_name").value;

      localStorage.setItem("roomname", room_name);
      
      window.location="kwitter_page.html"

firebase.database().ref("/").child(room_name).update({
purpose: "Adding Room Name"

});

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name - " + Room_names);
row ="<div class ='room_name'id ="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();


function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname",name);
window.location ="kwitter_page.html";

}

function logout(){
localStorage.removeItem("Username");
localStorage.removeItem("Roomname");
window.location = "index.html";

}