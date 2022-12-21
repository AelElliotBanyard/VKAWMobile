import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Operation } from "../classes/Operation";
import OperationCard from "../components/OperationCard";
import { getAllOperations } from "../Functions";

export default function Operations() {
  const [loading, setLoading] = useState(false);
  const [operations, setOperations] = useState<Operation[]>([]);

  useEffect(() => {
    setLoading(true);
    getAllOperations().then((data) => {
      let array = data.sort((a, b) => {
        return a.Date.getTime() - b.Date.getTime();
      });
      setOperations(array);
    });
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <View>
        <Text>Keine Eins&auml; vorhanden</Text>
      </View>
    );
  } else {
    return (
      <ScrollView>
        {operations.map((operation) => {
          return (
            <OperationCard
              key={operation.id}
              id={operation.id}
              title={operation.OperationTitle}
              date={operation.Date}
              startTime={operation.StartTime}
              endTime={operation.endTime}
            />
          );
        })}
      </ScrollView>
    );
  }
}
