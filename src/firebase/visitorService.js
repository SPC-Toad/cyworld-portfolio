import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "./firebaseConfig";

function getTodayDateStr() {
  // Format: YYYY-MM-DD
  return new Date().toISOString().split("T")[0]; 
}

export async function incrementVisits() {
  const counterRef = doc(db, "visitors", "counter");
  const snapshot = await getDoc(counterRef);

  const data = snapshot.exists() ? snapshot.data() : {};
  const lastUpdated = data.lastUpdated || "";
  const todayStr = getTodayDateStr();

  if (lastUpdated !== todayStr) {
    // Reset todayVisits since it's a new day
    await updateDoc(counterRef, {
      todayVisits: 1,
      totalVisits: increment(1),
      lastUpdated: todayStr
    });
  } else {
    await updateDoc(counterRef, {
      todayVisits: increment(1),
      totalVisits: increment(1)
    });
  }
}

export async function updateLocation(location) {
  const counterRef = doc(db, "visitors", "counter");
  await updateDoc(counterRef, {
    lastVisitLocation: location
  });
}

export async function getVisitorData() {
  const counterRef = doc(db, "visitors", "counter");
  const snapshot = await getDoc(counterRef);
  return snapshot.data();
}
