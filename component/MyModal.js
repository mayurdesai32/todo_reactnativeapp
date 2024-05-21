import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../styles/style";

const MyModal = ({
  modalVisible = false,
  setModalVisible,
  createData,
  myvalue,
  setValue,
  // mydatay,
}) => {
  let mytitle = myvalue?.title;
  let id = myvalue?.id ? myvalue.id : new Date();

  // mydatay;
  const onCreateHandler = () => {
    if (myvalue) {
      createData(myvalue);
      setValue({});
      setModalVisible(false);
    }
  };

  const onCancelHandler = () => {
    setModalVisible(false);
    setValue({});
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.ModalView}>
          <TextInput
            value={mytitle}
            style={styles.textInputStyle}
            onChangeText={(text) => {
              // mytitle = text;
              setValue({ title: text, id, time: new Date().toLocaleString() });
            }}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={onCreateHandler}
              style={{ ...styles.btn, backgroundColor: colors.secondary_color }}
            >
              <Text style={{ color: "white", fontSize: 24 }}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.btn, backgroundColor: "red" }}
              onPress={onCancelHandler}
            >
              <Text style={{ color: "white", fontSize: 24 }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  ModalView: {
    // flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    marginTop: "30%",
    // flex: 1,
    height: "70%",

    paddingHorizontal: "7%",
  },
  textInputStyle: {
    width: "100%",
    // height: 50,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "400",
    paddingLeft: 20,
    paddingVertical: 20,
    backgroundColor: "white",
  },

  btnContainer: {
    marginTop: "8%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  btn: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyModal;
