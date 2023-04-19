import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Emailauth = () => {
  const [email, setEmail] = useState<any>("");

  const handleRegister = () => {
    if (email.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.text1}>
        <Text style={styles.helloregisterto}>학교 이메일을 입력해 주세요</Text>
      </View>
      <View style={styles.confirminput}>
        <TextInput
          style={styles.confirminputitem}
          placeholder="이메일"
          onChangeText={(email) => setEmail(email)}
        ></TextInput>
      </View>

      <View style={styles.endbuttonposition}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Emailauthnumber")}
          style={[
            styles.endbuttonchild,
            handleRegister() ? { opacity: 1 } : { opacity: 0.5 },
          ]}
          disabled={!handleRegister()}
        >
          <Text style={styles.buttonText1}>완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    overflow: "hidden",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  text1: {
    alignItems: "flex-start",
    height: 80,
    marginTop: "30%",
  },
  helloregisterto: {
    fontSize: 25,
    letterSpacing: -0.3,
    lineHeight: 39,
    color: "#000000",
    width: 337,
    fontWeight: "700",
  },
  confirminput: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "center",
  },
  confirminputitem: {
    backgroundColor: "whitesmoke",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e8ecf4",
    borderStyle: "solid",
    width: "80%",
    height: "60%",
  },
  confirmnumberinput: {
    height: 56,
    width: 231,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  confirmnumberinputchild: {
    marginTop: 28,
    marginLeft: -115.34,
    height: 56,
    width: 231,
    left: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: "whitesmoke",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e8ecf4",
    borderStyle: "solid",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    color: "#ffffff",
    fontSize: 16,
  },
  buttonText1: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 16,
  },
  endbuttonposition: {
    flex: 5,
    marginTop: 30,
    alignItems: "center",
    width: "100%",
  },
  endbuttonchild: {
    backgroundColor: "#000000",
    borderRadius: 5,
    height: "12.5%",
    width: "80%",
    justifyContent: "center",
  },
  sexy: {
    top: 750,
    left: 183,
    color: "green",
    width: 65,
    height: 26,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
  },
  stopwathc: {
    left: 303,
    color: "#3d3d3d",
    width: 65,
    lineHeight: 23,
    top: 394,
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
  },
});

export default Emailauth;
