import { View, Text, ScrollView } from "react-native";
import React from "react";
import Singledata from "./Singledata";

const Body = ({ data, removeData, editData, CompleteValue }) => {
  return (
    <>
      <ScrollView
        style={{
          marginHorizontal: 15,
          marginVertical: 20,
        }}
      >
        {data &&
          data.map((e, i) => (
            <Singledata
              data={e}
              key={i}
              removeData={removeData}
              editData={editData}
              CompleteValue={CompleteValue}
            />
          ))}
      </ScrollView>
    </>
  );
};

export default Body;
