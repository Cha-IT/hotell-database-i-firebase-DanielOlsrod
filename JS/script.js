import { db } from "./config.js"
import { 
    getFirestore,
    collection,
    getDocs,
    
    
}from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";







/*const colRef = collection(db, "Room")

getDocs(colRef)
    .then((snapshot) => {
        let rooms = []
        snapshot.docs.forEach((doc) => {
            rooms.push({ ...doc.data(), id: doc.id})
        })
        console.log(rooms)
    })
    .catch(err => {
        console.log(err.message)
    })*/