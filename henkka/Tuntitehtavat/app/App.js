import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import Kartta from "./screens/Kartta";
import styles from "./components/styles"; 

export default function App() {
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState(null);

  const fetchCoordinates = async () => {
    if (!address.trim()) {
      Alert.alert("Virhe", "Osoitekenttä on tyhjä.");
      return;
    }

    try {
      const response = await fetch(`https://geocode.maps.co/search?q=${encodeURIComponent(address)}`);
      const data = await response.json();

      if (data.length === 0) {
        Alert.alert("Virhe", "Osoitetta ei löydy.");
        return;
      }

      const { lat, lon } = data[0];
      console.log(data);
      setCoords({
        latitude: parseFloat(lat),
        longitude: parseFloat(lon),
      });

    } catch (error) {
      Alert.alert("Virhe", "Virhe ladattaessa osoitetietoja.");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Kartta coords={coords} />
      <TextInput
        style={styles.input}
        placeholder="Syötä osoite"
        value={address}
        onChangeText={setAddress}
      />
      <View style={styles.buttonContainer}>
        <Button title="Etsi" onPress={fetchCoordinates} />
      </View>
    </View>
  );
}
