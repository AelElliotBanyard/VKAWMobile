import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { auth } from "./firebase.config";
import Login from "./src/Login";
import Home from "./src/screens/Home";
import Operations from "./src/screens/Operations";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return unsubscribe;
  }, []);

  if (loggedIn) {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Operations" component={Operations} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return <Login />;
  }
}
