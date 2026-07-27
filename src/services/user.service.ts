import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../config/firebase";
import { UserModel } from "../types/user";

export async function getUser(uid: string): Promise<UserModel | null> {
  const userRef = doc(db, "users", uid);

  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<UserModel, "id">),
  };
}

export async function updateUser(
  uid: string,
  data: Partial<Omit<UserModel, "id">>
) {
  const userRef = doc(db, "users", uid);

  await updateDoc(userRef, data);
}

export async function updateUserName(
  uid: string,
  name: string
) {
  const userRef = doc(db, "users", uid);

  await updateDoc(userRef, {
    name,
  });
}