import { db } from "./config.js"
import { 
    getFirestore,
    collection,
    getDocs,
    query
    
    

}from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

let roomsAvaileble = document.querySelector("#roomsavalible");
let floor = document.querySelector("#floor");
let beds = document.querySelector("#beds");
let type = document.querySelector("#type");
let avalible = document.querySelector("#avalible");
let applyBtn = document.querySelector("#applyBtn");

let selectedFloor = "none";
let selectedBeds = "none";
let selectedType = "none";
let selectedAvalible = false;

applyBtn.onclick = function(){
    selectedFloor = floor.value;
    selectedBeds = beds.value;
    selectedType = type.value;
    selectedAvalible = avalible.checked;
    console.log(selectedAvalible);
    console.log(selectedFloor);
    deletOldRooms();
}

async function getRoomData(){
    const rooms = await getDocs(query(collection(db, "Room")));

    rooms.forEach((room) => {
        /*console.log(room.data())*/
    if (
        (room.data().roomFloor ==  selectedFloor || selectedFloor == "none" ) &&
        (room.data().numOfBeds ==  selectedBeds || selectedBeds == "none" ) &&
        (room.data().roomType ==  selectedType || selectedType == "none" ) &&
        (room.data().isAvailble ==  true || selectedAvalible == false )
    )
    {
        var roomBox = document.createElement("div");
        roomBox.className = "element";
        roomBox.id = room.data().roomNum;
        roomsAvaileble.appendChild(roomBox);

        var roomFloor = document.createElement("p");
        roomFloor.textContent = "Floor:  " + room.data().roomFloor;
        document.getElementById(roomBox.id).appendChild(roomFloor);

        var roomBeds = document.createElement("p");
        roomBeds.textContent = "Beds:    " + room.data().numOfBeds;
        document.getElementById(roomBox.id).appendChild(roomBeds);

        var roomType = document.createElement("p");
        roomType.textContent = "Type:    " + room.data().roomType;
        document.getElementById(roomBox.id).appendChild(roomType);

        var isAvailble = document.createElement("p");
        if (room.data().isAvailble == true){isAvailble.textContent = "Avalible"} else {isAvailble.textContent = "Unavalible"};
        document.getElementById(roomBox.id).appendChild(isAvailble);

        
    }
    
    });
}
function deletOldRooms(){
    while (roomsAvaileble.firstChild){
        roomsAvaileble.removeChild(roomsAvaileble.firstChild);
    }
    getRoomData();
}

getRoomData();
