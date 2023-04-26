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
//teststestt

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
      <View style={styles.textview}>
        <Text style={styles.text_1}>Welcome!</Text>
        <Text style={styles.text_1}>Myplace UNI</Text>
      </View>
      <View style={styles.textinputview}>
        <TextInput style={styles.input} placeholder="이메일"></TextInput>
        <TextInput style={styles.input} placeholder="비밀번호"></TextInput>
      </View>
      <View style={styles.buttonview}>
        <TouchableOpacity
          style={styles.idpasscss}
          onPress={() => navigation.navigate("Idhakbun")}
        >
          <Text style={{ fontSize: 10 }}> 아이디 찾기 </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.idpasscss}
          onPress={() => navigation.navigate("Passwordid")}
        >
          <Text style={{ fontSize: 10 }}>비밀번호 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttoncss} onPress = {() => navigation.navigate("Dashboard")}>
          <Text
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              alignItems: "center",
              fontSize: 14,
            }}
          >
            {" "}
            로그인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#000000", marginTop: 50 }}
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={{ color: "#ffffff" }}> 회원가입 으로 이동</Text>
        </TouchableOpacity>
      </View>
    </View>

    /*
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
    */
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  textview: {
    flex: 1,
    justifyContent: "center",
  },
  text_1: {
    marginLeft: 30,
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
  },
  textinputview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderRadius: 5,
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    backgroundColor: "whitesmoke",
    width: "80%",
    height: "37.5%",
    marginTop: 15,
    textAlign: "center",
    fontSize: 14,
  },
  buttonview: {
    flex: 3,
    alignItems: "center",
  },
  buttoncss: {
    backgroundColor: "#000000",
    width: "80%",
    height: "15%",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  idpasscss: {
    alignItems: "flex-end",
    marginTop: 10,
    marginLeft: "60%",
    borderRadius: 8,
  },
});
