import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "../components/styles";

const Kartta = ({ coords }) => {
  return (
    <View style={styles.container}>
      {coords ? (
        <MapView
          style={styles.map}
          region={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={coords} title="Haettu sijainti" />
        </MapView>
      ) : (
        <Text style={styles.text}>Syötä osoite ja paina "Etsi"</Text>
      )}
    </View>
  );
};

export default Kartta;
