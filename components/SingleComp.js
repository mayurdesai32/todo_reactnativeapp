import {
  Text,
  View,
  StyleSheet,
  Modal,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState } from "react";

const SingleComp = ({ title = "", id = "", DeleteNote }) => {
  return (
    <Pressable style={styles.singleCom} onLongPress={(id) => updateNote(id)}>
      <Text style={styles.singleComText}>1 </Text>
      <Text style={styles.singleComText}>{title}</Text>
      <Pressable
        style={{ textAlign: "right", backgroundColor: "green" }}
        onPress={() => {
          DeleteNote(id);
        }}
      >
        <Text style={{ textAlign: "right", color: "green" }}>Delete</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  singleCom: {
    borderBottomWidth: 0.2,
    borderColor: "white",
    backgroundColor: "gray",
    marginBottom: 20,
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
    justifyContent: "space-between",
  },

  singleComText: {
    color: "white",
    fontSize: 24,
    fontWeight: 400,
    paddingLeft: 8,
  },

  createIcon: {
    position: "absolute",
    bottom: 0,
    width: 70,
    height: 70,
    borderRadius: "50%",
    backgroundColor: "green",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "black",
    width: "100%",
  },
});

export default SingleComp;
