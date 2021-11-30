import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <SafeAreaView style={[styles.container, {}]}>
      <View style={{ backgroundColor: "green", padding: 16 }}>
        <Text>Search</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "blue", padding: 16 }}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
