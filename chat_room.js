
const firebaseConfig = {
      apiKey: "AIzaSyCfQhXCx8uRmmN0SDb0lsE7su2ui3Ix4zY",
      authDomain: "basketball-group-chat-ecc20.firebaseapp.com",
      databaseURL: "https://basketball-group-chat-ecc20-default-rtdb.firebaseio.com",
      projectId: "basketball-group-chat-ecc20",
      storageBucket: "basketball-group-chat-ecc20.appspot.com",
      messagingSenderId: "502614886628",
      appId: "1:502614886628:web:ad3bdad29ce6b50ec884f1",
      measurementId: "G-FPKB7CYW60"
    };
    
    firebase.initializeApp(firebaseConfig);
    

    user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log("Room Name-"+Room_names);
     row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
      });});}
getData();

function addRoom()
{
      console.log("addroom")
      room_name=document.getElementById("room_name").value;
      console.log("roomname:"+room_name)
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"    
      });

      localStorage.setItem("room_name", room_name);

      window.location="BasketballGroupChat_page.html";
}

function logout()
{
    localStorage.removeitem("user_name");
    localStorage.removeitem("room_name");
    window.location="index.html"
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="BasketballGroupChat_page.html";
}