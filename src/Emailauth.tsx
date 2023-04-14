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
  const [emailauth1, setEmail] = useState<any>("");

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
          onChangeText={(emailauth1)=>setEmail(emailauth1)}
        ></TextInput>
      </View>
      <View style={styles.confirmnumberinput}>
        <TextInput
          style={styles.confirmnumberinputchild}
          placeholder="인증번호"
        ></TextInput>
      </View>

      <View style={styles.checkbuttonwrapper}>
        <View style={styles.checkbuttonposition}>
          <TouchableOpacity style={styles.checkbuttonchild}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.endbuttonposition}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Emailauthsuccess")}
          style={styles.endbuttonchild}
        >
          <Text style={styles.buttonText1}>완료</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.stopwathc}>3 : 00</Text>
      <Text style={styles.sexy}>고객센터</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#ffffff",
  },
  text1: {
    top: 144,
    right: 51,
    left: 42,
    height: 80,
    position: "absolute",
  },
  helloregisterto: {
    fontSize: 30,
    letterSpacing: -0.3,
    lineHeight: 39,
    color: "#000000",
    width: 337,
    textAlign: "left",
    left: 0,
    top: 0,
    fontWeight: "700",
    position: "absolute",
  },
  confirminput: {
    top: 261,
    left: 42,
    width: 342,
    height: 56,
    position: "absolute",
  },
  confirminputitem: {
    backgroundColor: "whitesmoke",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e8ecf4",
    borderStyle: "solid",
    width: 342,
    height: 56,
    position: "absolute",
  },
  confirmnumberinput: {
    marginTop: -137,
    marginLeft: -173,
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
  checkbuttonwrapper: {
    width: "23.27%",
    top: "35.3%",
    bottom: "58.69%",
    left: "66.5%",
    right: "10.23%",
    height: "6.01%",
    position: "absolute",
  },
  checkbuttonposition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  checkbuttonchild: {
    backgroundColor: "#000000",
    borderRadius: 5,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: 41.5,
    height: 56,
    position: "absolute",
    width: 100,
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
    marginTop: 16.5,
    color: "#ffffff",
    fontSize: 16,
  },
  endbuttonposition: {
    width: "80%",
    bottom: "43.99%",
    left: "9.77%",
    top: "55%",
    height: "6.01%",
    right: "10.23%",
    position: "absolute",
  },
  endbuttonchild: {
    backgroundColor: "#000000",
    borderRadius: 5,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
