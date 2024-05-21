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

import SingleComp from "./SingleComp";

// import MyModal from "./MyModal";
export default function AssetExample() {
  const [data, setdata] = useState([
    { id: 0, text: "hello" },
    { id: 1, text: "hello" },
  ]);
  // const [data, setdata] = useState(['fdgdfgd', 'ffdsfds']);
  const [textValue, setTextValue] = useState("dfgdf");

  const [modalVisible, setModalVisible] = useState(false);
  let id = Math.random();
  const createNote = () => {
    console.log(textValue);
    if (textValue !== "") {
      setdata((prevdaa) => [...prevdaa, { id: id, text: textValue }]);
      // setdata([...data, textValue]);
      // alert(Object.keys(textValue['target']));
      // alert(Object.keys(textValue['target']));
      //  alert(textValue["target"]);
      setTextValue("");
    }
  };

  const DeleteNote = (id) => {
    console.log(id);
    let sam = data.filter((e, i) => {
      // if (e.id !== id) {
      //   return e;
      // }

      return e.id !== id;
    });
    setdata(sam);
  };

  const updateNote = () => {
    data.filter((e, i) => {
      if (i == id) {
        return e;
      }
    });
  };

  return (
    <View style={{ marginTop: 30, flex: 1 }}>
      <StatusBar backgroundColor={"green"} />
      <View style={styles.Navbar}>
        <Text style={styles.NavbarText}>TodoList</Text>
      </View>
      <View style={{ marginHorizontal: "5%", marginTop: 20, height: "80%" }}>
        <ScrollView>
          {data.map((e, i) => (
            <SingleComp title={e.text} DeleteNote={DeleteNote} id={e.id} />
          ))}
        </ScrollView>

        {/* <MyModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          textValue={textValue}
          setTextValue={setTextValue}
          createNote={createNote}
        /> */}

        <TouchableOpacity
          style={styles.createIcon}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ fontSize: 26, fontWeight: 400, color: "white" }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Navbar: {
    backgroundColor: "green",
    width: "100%",
    height: 70,

    justifyContent: "center",
  },
  NavbarText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500",
  },

  singleCom: {
    borderBottomWidth: 0.2,
    borderColor: "white",
    backgroundColor: "gray",
    marginBottom: 20,
    flexDirection: "row",
    paddingVertical: 10,
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
    right: 0,
    width: 70,
    height: 70,
    borderRadius: "50%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
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
