import { signInWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { auth } from "../firebase.config";
import FlatButton from "./FlatButton";
import Input from "./Input";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (): void => {
    const email = username + "@vkaw.ch";
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
      })
      .catch(() => {
        alert("Falscher Benutzername oder Passwort");
        setPassword("");
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss}
      accessible={false}
    >
      <View>
        <Text>VKAW</Text>
        <Input
          title="Benutzername"
          type="username"
          value={username}
          onChange={(text: string) => setUsername(text)}
        />
        <Input
          title="Passwort"
          type="password"
          value={password}
          onChange={(text: string) => setPassword(text)}
        />
        <FlatButton title="Anmelden" onPress={signIn} />
      </View>
    </TouchableWithoutFeedback>
  );
}
