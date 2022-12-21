import { collection, getDocs, Timestamp } from "firebase/firestore";
import { Platform } from "react-native";
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

export const getDateString = (date: Date) => {
  if (Platform.OS === "ios")
    return date.toLocaleDateString("de-CH", {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  else {
    var monthName = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "October",
        "November",
        "Dezember",
      ],
      utc = date.getTime() + date.getTimezoneOffset() * 60000,
      DE_time = utc + 3600000 * -4,
      DE_date = new Date(DE_time);

    return (
      DE_date.getDate() +
      ". " +
      monthName[DE_date.getMonth()] +
      " " +
      DE_date.getFullYear()
    );
  }
};

export const getTimeString = (time: Timestamp) => {
  const date = time.toDate();
  return date.toTimeString().slice(0, 5);
};
