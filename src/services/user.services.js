import { db } from "../../firebase.config.js";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

//const userCollectionRef = collection(db, "users");

const getUser = async (id) => {
  const userDoc = doc(db, "users", id);
  return getDoc(userDoc);
};

const updateUser = async (id, updatedUser) => {
  const userDoc = doc(db, "users", id);
  return updateDoc(userDoc, updatedUser);
};

export { getUser, updateUser };
