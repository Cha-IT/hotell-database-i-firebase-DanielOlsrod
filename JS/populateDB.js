import { db } from config.js; 
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"

async function makeHotelRoom (roomNum, roomFloor, numOfBeds, isAvailble, roomType) {
    await setDoc(doc (db, "Room", roomNum)), {
        roomFloor: roomFloor,
        numOfBeds: numOfBeds,
        isAvailble: isAvailble,
        roomType: roomType,
    }
}

makeHotelRoom(101, 1, 2, false, "rom")