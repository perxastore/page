 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
  

const firebaseConfig = {
  apiKey: "AIzaSyB7FJ8jzZgv4I4RW9-B6Q3U-RiZ0_ON_fg",
  authDomain: "perxa-e9bb2.firebaseapp.com",
  databaseURL: "https://perxa-e9bb2-default-rtdb.firebaseio.com",
  projectId: "perxa-e9bb2",
  storageBucket: "perxa-e9bb2.firebasestorage.app",
  messagingSenderId: "784850450102",
  appId: "1:784850450102:web:110962deb6e693aec19817",
  measurementId: "G-DMVEXWBG3L"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const itemsDiv = document.getElementById("items");

onSnapshot(collection(db, "items"), (snapshot) => {
  itemsDiv.innerHTML = "";

  snapshot.forEach(doc => {
    const item = doc.data();

    itemsDiv.innerHTML += `
      <div>
        <h3>${item.name}</h3>
        <p>Status: ${item.status}</p>
      </div>
    `;
  });
});
