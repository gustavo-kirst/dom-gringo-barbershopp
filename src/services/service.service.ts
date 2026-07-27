import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../config/firebase";
import { ServiceModel } from "../types/service";

export async function getServices(): Promise<ServiceModel[]> {
  const servicesRef = collection(db, "services");

  const q = query(
    servicesRef,
    where("active", "==", true)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<ServiceModel, "id">),
  }));
}