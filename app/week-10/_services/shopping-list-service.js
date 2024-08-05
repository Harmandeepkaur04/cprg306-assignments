import { db } from "../_utils/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function getItems(userId) {
  try {
    const itemsCollectionRef = collection(db, `users/${userId}/items`);
    const querySnapshot = await getDocs(itemsCollectionRef);

    const items = [];

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error getting items:", error);
    return [];
  }
}

export async function addItem(userId, item) {
  try {
    const itemsCollectionRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsCollectionRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
}
