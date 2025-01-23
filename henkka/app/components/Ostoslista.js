import React, { useState } from "react";
import { Text, View, FlatList, TextInput, Button } from "react-native";
import styles from "./styles";

export default function Ostoslista() {
  const [listItem, setListItem] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState("");

  const handleInputChange = (text) => {
    setListItem(text);
  };

  const addItem = () => {
    if (listItem !== "") {
      setList([...list, { key: Math.random().toString(), value: listItem }]);
      setListItem("");
      setAlert("List item added!");
      setTimeout(() => {
        setAlert("");
      }, 2000);
    }
  };

  const clearList = () => {
    setList([]);
    setAlert("List has been cleared!");
    setTimeout(() => {
      setAlert('');
    }, 2000);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={listItem}
          onChangeText={handleInputChange}
          placeholder="Lisää uusi ostos..."
        />
        <View style={styles.buttonContainer}>
          <Button title="Add" onPress={addItem} />
          <Button title="Clear" onPress={clearList} />
        </View>


         
          {alert && <Text style={styles.alert}>{alert}</Text>}

        
        <Text style={styles.title}>Ostoslista</Text>
        <FlatList
          style={styles.listContainer}
          data={list}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>{item.value}</Text>
          )}
        />
      </View>
    </View>
  );
}
