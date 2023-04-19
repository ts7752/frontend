import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../config";
import { createStackNavigator } from "@react-navigation/stack";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import CryptoJS from "crypto-js";
import { Dimensions } from "react-native";

const Stack = createStackNavigator();
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Login = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");

  const loginUser = async (email: string, password: string) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert("이메일 또는 비밀번호를 확인해 주세요");
    }
  };
  //비밀번호 분실 시 비밀번호 재설정 링크
  const forgetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("패스워드 변경을 위해 이메일은 전송 하였습니다 확인해 주세요.");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.text1}>
        <Text style={styles.myplaceuni}>MyPlaceUNI</Text>
      </View>

      <View style={styles.enteryouremailinput}>
        <TextInput
          style={styles.enteryourpasswordinputchild}
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="이메일"
        />
      </View>

      <View style={styles.enteryourpasswordinput}>
        <TextInput
          style={styles.enteryourpasswordinputchild}
          placeholder="비밀번호"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <Image
          source={require("../assets/logineye.png")}
          resizeMode="cover"
          style={styles.passwordIcon}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            forgetPassword();
          }}
          style={{ marginBottom: 30, marginTop: -10 }}
        >
          <Text style={{ fontWeight: "bold" }}> 비밀번호 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => loginUser(email, password)}
          style={{
            backgroundColor: "#000000",
            justifyContent: "center",
            width: "90.23%",
            height: "15%",
            marginTop: 0,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            {" "}
            로그인{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  textInput: {
    top: 349,
    left: 49,
    width: 331,
  },
  enteryourpasswordinputchild: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#e8ecf4",
    borderStyle: "solid",
    left: 0,
    top: 0,
    height: 56,
    width: 331,
    position: "absolute",
    alignItems: "center",
  },
  textInputchild: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e8ecf4",
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  textInputemail: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    flex: 2,
    height: "40%",
    marginTop: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },
  myplaceuni: {
    fontSize: 30,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "bold",
    color: "#000000",
    width: 200,
    textAlign: "left",
    height: 97,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 133,
    right: 115,
    left: 35,
    height: 97,
    position: "absolute",
  },
  enteryouremailinput: {
    top: 270,

    width: 331,
    position: "absolute",
    height: 56,
    alignItems: "center",
  },
  enteryourpasswordinput: {
    top: 349,

    width: 331,
    position: "absolute",
    height: 56,
    alignItems: "center",
  },
  loginbuttonchild: {
    height: "6.43%",
    width: "88.27%",
    top: "55.32%",
    right: "5.92%",
    bottom: "43.22%",
    left: "5.81%",
    backgroundColor: "#000000",
    position: "absolute",
  },
  loginbuttontext: {
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
    color: "#ffffff",
    top: 20,
    left: 164,
    width: 52,
    height: 20,
  },
  enteryourinputpassword: {
    top: 349,
    left: 49,
    width: 331,
  },
  passwordIcon: {
    top: 17,
    left: 293,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  passwordchange: {
    top: 411,
    left: 280,
    fontSize: 14,
    justifyContent: "center",
    width: 111,
    height: 21,
    textAlign: "center",
    fontWeight: "bold",
    position: "absolute",
  },
  passwordflex: {
    alignItems: "flex-end",
    display: "flex",
  },
});
