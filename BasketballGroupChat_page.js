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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    name= message_data['name'];
    message= message_data['message'];
    like= message_data['like'];
    name_with_tag="<h4> " + name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='maessage_h4'>" + message+"</h4>";
    like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
   span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ Like +"</span></button><hr>";

   row=name_with_tag+message_with_tag + message_with_tag + span_with_tag;
   document.getElementById("output").innerHTML +=row;

 } });  }); }
getData();
function logout()
{
    localStorage.removeitem("user_name");
    localStorage.removeitem("user_name");
    window.location="index.html"
}

function updateLike(messagea_id)
{
  console.log("clicked on like button-" +message_id);
  button_id=message_id;
  Like=document.getElementById(button_id).ariaValueMax;
  updated_links=Number(likes)+1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
  });

}