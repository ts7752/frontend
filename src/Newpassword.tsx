import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SelectList } from "react-native-dropdown-select-list";

const Stack = createStackNavigator();

const Newpassword = () => {
  const [category, setCategory] = useState<any>("");
  const [subcategory, setSubategory] = useState<any>("");

  const [hakbun, setHakbun] = useState<any>("");
  const [hakgyo, setHakgyo] = useState<any>("");
  const [hakgua, setHakgua] = useState<any>("");

  const navigation = useNavigation<any>();
  return (
    <View style={styles.view}>
      <View style={styles.view2}>
        <Text style={styles.text1}>새로운 비밀번호 입력</Text>
        <Text style={styles.text2}>새로운 비밀번호를 입력해 주세요</Text>
        <TextInput
          style={styles.input}
          placeholder="새로운 비밀번호"
        ></TextInput>
        <TextInput style={styles.input} placeholder="비밀번호 확인"></TextInput>
      </View>
      <View style={styles.view3}>
        <TouchableOpacity
          style={styles.buttonchild}
          onPress={() => navigation.navigate("Passwordsuc")}
        >
          <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 15 }}>
            다음
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  view2: {
    flex: 2,
    width: "100%",
    paddingTop: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: "#000000",
    width: "100%",
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 30,
    marginLeft: 80,
  },
  input: {
    width: "80%",
    height: "20%",
    backgroundColor: "#E8ECF4",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 0.3,
    textAlign: "center",
  },
  view3: {
    flex: 4,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text2: {
    marginTop: 10,
    color: "gray",
    width: "100%",
    fontSize: 16,
    marginLeft: 80,
  },
  buttonchild: {
    marginTop: 30,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "12.5%",
    borderRadius: 5,
  },
});

export default Newpassword;
