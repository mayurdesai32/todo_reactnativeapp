import {
  Text,
  View,
  StyleSheet,
  Modal,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";
// import { TextInput } from 'react-native-paper';

const MyModal = ({
  modalVisible = false,
  setModalVisible,
  textValue,
  setTextValue,
  createNote,
  mytext,
}) => {
  // const [data,setdata]=useState([{id:1,text:"hello"},{id:1,text:"hello"}])
  const [data, setdata] = useState(["fdgdfgd", "ffdsfds"]);
  // const [textValue, setTextValue] = useState('');

  console.log(modalVisible);
  //  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{ width: "80%", height: 50, backgroundColor: "white" }}
            onChange={
              // style={styles.input}

              (text) => {
                //  alert(Object.keys(textValue['target']));
                console.log(Object.keys(text));
                console.log(text);
                setTextValue(mytext);
              }
            }
            value={textValue}
          />

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => createNote()}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40,
                width: "100%",
                flex: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: "green",
                  width: 100,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 26, fontWeight: 400 }}>create</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setModalVisible(false)}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40,
                // width: 200,
              }}
            >
              <View
                style={{
                  backgroundColor: "orange",
                  width: 100,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 26, fontWeight: 400 }}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "black",
    width: "100%",
  },
});

export default MyModal;
