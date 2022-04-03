  var firebaseConfig = {
    apiKey: "AIzaSyAtNwOA5Ed5KgSu8TMC6CtfHesVYefWyQ0",
    
    authDomain: "pro-94-671ee.firebaseapp.com",
    
    databaseURL: "https://pro-94-671ee-default-rtdb.firebaseio.com",
    
    projectId: "pro-94-671ee",
    
    storageBucket: "pro-94-671ee.appspot.com",
    
    messagingSenderId: "740766982918",
    
    appId: "1:740766982918:web:eef695ae8bbfc808c4f487",
    
    measurementId: "G-KY4S0RD4W2"
};
  firebase.initializeApp( firebaseConfig);
    User_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome  "+ User_name+"!";

    function addroom()
    {
      Room_names=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_names).update({
        purpose:"adding Room Name"
      });
      localStorage.setItem("room_name",Room_names);
      window.location="cybergram_page.html";
    }
    function getData()
     {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;  
      Room_names = childKey;
      //Start code
console.log("Room name -"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="cybergram_page.html";
}

function removeUser()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";

}