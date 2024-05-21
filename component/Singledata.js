import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../styles/style";

const Singledata = ({ data, removeData, editData, CompleteValue }) => {
  let myTime = data["time"].split(" ");
  let complete = data["complete"]
    ? { ...styles.radio, backgroundColor: "green" }
    : styles.radio;
  return (
    <Pressable
      style={styles.container}
      onPress={() => editData(data.id)}
      onLongPress={() => removeData(data.id)}
    >
      <TouchableOpacity
        style={complete}
        onPress={() => CompleteValue(data.id)}
      />
      <Text style={styles.textStyle}>{data["title"]}</Text>
      <Text
        style={{
          fontWeight: "300",
          fontSize: 17,
          marginLeft: "auto",
          color: colors.forth_color,
        }}
      >
        {myTime[1]} {myTime[2]}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // height: "30%",
    borderRadius: 12,
    marginBottom: 7,
    paddingVertical: 20,
    paddingHorizontal: 14,
    // borderColor: "white",
    borderWidth: 1,
    backgroundColor: colors.third_color,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  textStyle: {
    fontWeight: "400",
    fontSize: 22,
    color: colors.forth_color,
    marginLeft: 15,
    // fontWeight: "100",
    // textDecorationLine: "line-through",
  },
  radio: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 11,
    width: 22,
    height: 22,
    // borderColor: colors.secondary_color,
    // backgroundColor: colors.secondary_color,
  },
});

export default Singledata;
