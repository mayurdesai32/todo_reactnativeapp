import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { colors } from "../styles/style";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "500" }}>My Todo List</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary_color,
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Navbar;
