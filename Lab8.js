import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
const data = [
  { id: "1", name: "Hoan" },
  { id: "2", name: "Nhan" },
  { id: "3", name: "Quan" },
  { id: "4", name: "Long" },
];

const Lab8 = () => {
  const [searchText, setSearchText] = useState("");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>lab8</Text>
      </View>
      <View>
        <TextInput
          placeholder="Tìm kiếm..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          style={{ borderWidth: 1, padding: 5 }}
        />

        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.listds}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Lab8;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  view: {
    backgroundColor: "gray",
    padding: 8,
    marginBottom: 16,
    color: "black",
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginBottom: 16,
  },
  listItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  listItemText: {
    fontSize: 16,
  },
  listds:{
    alignSelf:'center'
  },
});