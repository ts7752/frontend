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

const Uniauthhakgua = () => {
  const [category, setCategory] = useState<any>("");
  const [subcategory, setSubategory] = useState<any>("");

  const [hakgua, setHakgua] = useState<any>("");

  const handleRegister = () => {
    if (hakgua.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const navigation = useNavigation<any>();
  return (
    <View style={styles.view}>
      <View style={styles.view2}>
        <Text style={styles.text1}>대학교 인증</Text>
        <Text style={styles.text2}>학과를 선택해 주세요</Text>
        <TextInput
          style={styles.input}
          placeholder="학과"
          onChangeText={(hakgua) => setHakgua(hakgua)}
        ></TextInput>
      </View>
      <View style={styles.view3}>
        <TouchableOpacity
          style={[
            styles.buttonchild,
            handleRegister() ? { opacity: 1 } : { opacity: 0.5 },
          ]}
          onPress={() => navigation.navigate("Emailauth")}
          disabled={!handleRegister()}
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

export default Uniauthhakgua;
