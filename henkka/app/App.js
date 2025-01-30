import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Calculator from "./Calculator";
import History from "./History";

const Stack = createStackNavigator();

export default function App() {
  const [history, setHistory] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator">
          {(props) => <Calculator {...props} history={history} setHistory={setHistory} />}
        </Stack.Screen>
        <Stack.Screen name="History">
          {(props) => <History {...props} history={history} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
