import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../config";
import crypto from "crypto-js";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Registration = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState<string>("");
  const [passwordconfirm, setPasswordconfirm] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [passwordMatch, setPasswordMatch] = useState<boolean>(false);

  const handleRegister = () => {
    if (password !== passwordconfirm) {
      console.log("passwords do not match");
      return false;
    } else if (password.length < 8 && passwordconfirm.length < 8) {
      console.log("비밀번호는 8자 이상입니다");
      return false;
    } else if (
      password.length >= 8 &&
      passwordconfirm.length >= 8 &&
      email.length > 0 &&
      id.length > 0
    ) {
      console.log("passwords match");
      return true;
    }
  };

  useEffect(() => {
    setPasswordMatch(password === passwordconfirm);
  }, [password, passwordconfirm]);

  const registerUser = async (name: string, id: string, password: string) => {
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
          <Text
            style={{
              alignContent: "center",
              textAlign: "center",
              color: "#000000",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            이메일
          </Text>
          <TextInput
            style={styles.inputlayout}
            placeholder="email"
            onChangeText={(email) => setEmail(email)}
            autoCorrect={false}
            keyboardType="email-address"
          />
          <Text
            style={{
              alignContent: "center",
              textAlign: "center",
              color: "#000000",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            아이디
          </Text>
          <TextInput
            style={styles.inputlayout}
            placeholder="아이디"
            onChangeText={(id) => setId(id)}
            autoCorrect={false}
          />
          <Text
            style={{
              alignContent: "center",
              textAlign: "center",
              color: "#000000",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            비밀번호
          </Text>
          <TextInput
            style={styles.inputlayout}
            placeholder="비밀번호"
            onChangeText={(password) => setPassword(password)}
            autoCorrect={false}
          />
          <Text
            style={{
              alignContent: "center",
              textAlign: "center",
              color: "#000000",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            비밀번호 확인
          </Text>
          <TextInput
            style={styles.inputlayout}
            placeholder="비밀번호 확인"
            onChangeText={(passwordconfirm) =>
              setPasswordconfirm(passwordconfirm)
            }
            autoCorrect={false}
            //비밀번호 입력 시큐어
            // secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            /* {
             if (handleRegister()) {
              registerUser(email, id, password);
            }  
          }*/ navigation.navigate("Registersuccess")
          }
          style={[
            styles.button,
            handleRegister() ? { opacity: 1 } : { opacity: 0.5 },
          ]}
          disabled={!handleRegister()}
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
