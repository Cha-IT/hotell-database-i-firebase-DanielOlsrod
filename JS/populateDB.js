import { db } from "./config.js"
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"

async function makeHotelRoom (roomNum, roomFloor, numOfBeds, isAvailble, roomType) {
    await setDoc(doc (db, "Room", roomNum), {
        roomNum: roomNum,
        roomFloor: roomFloor,
        numOfBeds: numOfBeds,
        isAvailble: isAvailble,
        roomType: roomType,
    });
}

makeHotelRoom("101", 1, 2, true, "Room");
makeHotelRoom("102", 1, 2, false, "Room");
makeHotelRoom("103", 1, 2, true, "Room");
makeHotelRoom("104", 1, 2, true, "Room");

makeHotelRoom("201", 2, 4, true, "Suite");
makeHotelRoom("202", 2, 4, false, "Suite");
makeHotelRoom("203", 2, 8, false, "Suite");
makeHotelRoom("204", 2, 6, true, "Suite");