import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { Operation } from "./classes/Operation";

export const getAllOperations = async (): Promise<Operation[]> => {
  try {
    const data = await getDocs(collection(db, "einsaetze"));
    const operations: Operation[] = [];
    data.docs.map((doc) => {
      const docdata = doc.data();
      operations.push(
        new Operation(
          docdata._id.toString(),
          docdata.start.toDate(),
          docdata.start,
          docdata.end,
          docdata.el,
          docdata.anzVk,
          docdata.vks,
          docdata.bemerkung,
          docdata.name,
          docdata.vollstaendig
        )
      );
    });
    return operations;
  } catch (error) {
    console.log(error);
    return [];
  }
};
