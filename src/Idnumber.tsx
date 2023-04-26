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

const Idnumber = () => {
  const [category, setCategory] = useState<any>("");
  const [subcategory, setSubategory] = useState<any>("");

  const [hakbun, setHakbun] = useState<any>("");
  const [hakgyo, setHakgyo] = useState<any>("");
  const [hakgua, setHakgua] = useState<any>("");

  const navigation = useNavigation<any>();
  return (
    <View style={styles.view}>
      <View style={styles.view2}>
        <Text style={styles.text1}>코드 입력</Text>
        <Text style={styles.text2}>이메일로 코드를 보내 드렸어요</Text>
        <Text style={styles.text2}>확인 해주세요!</Text>
        <TextInput style={styles.input} placeholder="인증번호"></TextInput>
      </View>
      <View style={styles.view3}>
        <TouchableOpacity
          style={styles.buttonchild}
          onPress={() => navigation.navigate("Passwordemail")}
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
    backgroundColor: "#ffffff",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 50,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
  },
  view3: {
    flex: 4,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text2: {
    marginTop: 5,
    color: "gray",
    width: "100%",
    fontSize: 12,
    marginLeft: 80,
  },
  buttonchild: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "12.5%",
    borderRadius: 5,
  },
});

export default Idnumber;
