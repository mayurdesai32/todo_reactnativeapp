import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../styles/style";

const PlusBtn = ({ modalVisible = false, setModalVisible }) => {
  let visible;
  if (modalVisible) {
    visible = {
      display: "none",
    };
  } else {
    visible = {};
  }

  return (
    <TouchableOpacity
      style={{ ...styles.container, ...visible }}
      onPress={() => setModalVisible(true)}
    >
      <Text style={styles.textStyle}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "2%",
    right: "5%",
    backgroundColor: colors.secondary_color,
    width: 80,
    height: 80,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontWeight: "400",
    fontSize: 48,
  },
});

export default PlusBtn;
