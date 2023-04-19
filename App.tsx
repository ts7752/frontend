import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./config";

import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";
import Select from "./src/Select";
import Registersuccess from "./src/Registersuccess";
import Uniauth from "./src/Uniauth";
import Emailauth from "./src/Emailauth";
import Emailauthsuccess from "./src/Emailauthsuccess";
import Emailauthnumber from "./src/Emailauthnumber";
import Uniauthhakbun from "./src/Uniauthhakbun";
import Uniauthhakgua from "./src/Uniauthhakgua";
import Uniauthhakgyo from "./src/Uniauthhakgyo";

const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<firebase.User | null>(null);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Select" component={Select} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Registersuccess" component={Registersuccess} />
      <Stack.Screen name="Uniauth" component={Uniauth} />
      <Stack.Screen name="Emailauth" component={Emailauth} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Emailauthsuccess" component={Emailauthsuccess} />
      <Stack.Screen name="Emailauthnumber" component={Emailauthnumber} />
      <Stack.Screen name="Uniauthhakbun" component={Uniauthhakbun} />
      <Stack.Screen name="Uniauthhakgua" component={Uniauthhakgua} />
      <Stack.Screen name="Uniauthhakgyo" component={Uniauthhakgyo} />
    </Stack.Navigator>
  );
}
export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
