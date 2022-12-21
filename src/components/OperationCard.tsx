import { View, Text, StyleSheet } from "react-native";
import { getDateString, getTimeString } from "../Functions";

export default function OperationCard({
  title,
  date,
  startTime,
  endTime,
  id,
}: any) {
  return (
    <View style={styles.card} key={id}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDate}>{getDateString(date)}</Text>
      <Text style={styles.cardTime}>
        {getTimeString(startTime) + " - " + getTimeString(endTime)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  cardDate: {
    fontSize: 14,
    color: "#000",
  },
  cardTime: {
    fontSize: 14,
    color: "#000",
  },
});
