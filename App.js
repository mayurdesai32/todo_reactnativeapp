import { StyleSheet, Text, View, StatusBar } from "react-native";

import Navbar from "./component/Navbar";
import Body from "./component/Body";
import PlusBtn from "./component/PlusBtn";
import MyModal from "./component/MyModal";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function App() {
  const localStorageFunc = async () => {
    let datalist = JSON.parse(await AsyncStorage.getItem("datalist"));

    if (datalist) setData(datalist);
    console.log("datalist", datalist);
  };

  useEffect(() => {
    localStorageFunc();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [myvalue, setValue] = useState({});

  const createData = async (newData) => {
    let mydata = data?.filter((e, i) => e.id != newData.id);

    let list = [newData, ...mydata];
    await AsyncStorage.setItem("datalist", JSON.stringify(list));
    return setData(list);
  };

  const removeData = async (id) => {
    let mydata = data.filter((e, i) => e.id != id);

    await AsyncStorage.setItem("datalist", JSON.stringify(mydata));
    setData(mydata);
  };

  const editData = (id) => {
    console.log("editData", id);
    let mydata = data.find((e, i) => e.id === id);
    console.log("mydata", mydata);
    setValue(mydata);
    setModalVisible(true);
  };

  const CompleteValue = async (id) => {
    console.log("setComplete", id);
    let mydata = data.map((e, i) => {
      if (e.id === id) {
        let complete = e.complete ? false : true;
        return { ...e, complete };
      } else {
        return e;
      }
    });

    await AsyncStorage.setItem("datalist", JSON.stringify(mydata));
    setData(mydata);

    // console.log("mydata", mydata);
    //  setValue(mydata);
    //  setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar color="white" />
      <Navbar />

      {modalVisible ? (
        <></>
      ) : (
        <Body
          data={data}
          removeData={removeData}
          editData={editData}
          CompleteValue={CompleteValue}
        />
      )}

      <MyModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        createData={createData}
        myvalue={myvalue}
        setValue={setValue}
      />
      <PlusBtn modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
