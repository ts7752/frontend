import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../config";
import crypto from "crypto-js";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Registration = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");

  const registerUser = async (
    email: string,
    name: string,
    id: string,
    password: string
  ) => {
    const hashedPassword = crypto.SHA256(password).toString();
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, hashedPassword)
      .then(() => {
        firebase
          .auth()
          .currentUser?.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://test-a7985.firebaseapp.com",
          })
          .then(() => {
            alert(
              "이메일 인증을 위해 입력하신 이메일로 인증 메일을 전송 하였습니다 확인해 주세요."
            );
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser?.uid)
              .set({
                email,
                name,
                id,
                password: hashedPassword,
              });
            navigation.navigate("Registersuccess");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 23 }}>회원가입</Text>
        <View style={{ marginTop: 40 }}>
          <TextInput
            style={styles.inputlayout}
            placeholder="이름"
            onChangeText={(name) => setName(name)}
            autoCorrect={false}
          />
          <TextInput
            style={styles.inputlayout}
            placeholder="아이디"
            onChangeText={(id) => setId(id)}
            autoCorrect={false}
          />
          <TextInput
            style={styles.inputlayout}
            placeholder="비밀번호"
            onChangeText={(email) => setEmail(email)}
            autoCorrect={false}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.inputlayout}
            placeholder="비밀번호 확인"
            onChangeText={(password) => setPassword(password)}
            autoCorrect={false}
            //비밀번호 입력 시큐어
            // secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => registerUser(email, name, id, password)}
          style={styles.button}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#ffffff" }}>
            {" "}
            회원가입{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Registration;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 10,
    textAlign: "left",
    alignItems: "flex-end",
    display: "flex",
    lineHeight: 19,
  },
  button: {
    marginTop: 50,
    height: 50,
    width: 350,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  inputlayout: {
    height: 56,
    width: 323,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e8ecf4",
    borderStyle: "solid",
    marginTop: 20,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
});
