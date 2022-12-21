import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Input({ title, type, value, onChange }: any) {
  const [focus, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={type === "password"}
        style={focus ? styles.inputFocused : styles.input}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: 12,
  },
  title: {
    color: "#fa0",
    fontSize: 12,
    fontWeight: "bold",
    position: "absolute",
    transform: [{ translateY: 2 }, { translateX: 20 }],
    zIndex: 2,
    backgroundColor: "#333",
    paddingHorizontal: 5,
  },
  input: {
    width: "auto",
    height: 40,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0)",
    color: "#fff",
    borderColor: "#000",
  },
  inputFocused: {
    width: "auto",
    height: 40,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "rgba(255,255,255,0)",
    color: "#fff",
    borderColor: "#fa0",
    padding: 10,
  },
});
