import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import React from "react";
import { Text, StyleSheet, Dimensions, View, TouchableOpacity, Pressable } from "react-native";
const deviceWidth = Dimensions.get("window").width;

const pressed = () => {
  console.log("pressed");
};

const LoginScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.topSection}>
        <ImageBackground style={styles.uKSmcMmD} source={require("./Vodafone.png")} resizeMode="cover"></ImageBackground>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.bottomSectionText}>Welcome Back!</Text>
        <Text style={styles.bottomSectionDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
        <Pressable style={[btnStyles.btn]} onPress={() => {
        navigation.navigate("login2");
      }}>
          <View>
            <Text style={[btnStyles.btnText]}>Login</Text>
          </View>
        </Pressable>
        <Pressable style={[btnStyles.btn, styles.loginBtnStyle]} onPress={() => {
        navigation.navigate("termsAndConditions");
      }}>
          <Text style={[btnStyles.btnText, styles.loginBtnText]}>
            Learn More
          </Text>
        </Pressable>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#fff"
  },
  topSection: {
    flex: 1,
    alignItems: "center"
  },
  bottomSection: {
    flex: 1,
    justifyContent: "center"
  },
  bottomSectionText: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  },
  bottomSectionDescription: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "400",
    maxWidth: deviceWidth / 1.4,
    textAlign: "center",
    padding: 5,
    marginVertical: 12
  },
  headingTxt: {
    fontWeight: "bold",
    color: "#E60001",
    fontSize: 28
  },
  loginBtnStyle: {
    backgroundColor: "white",
    borderColor: "#E60001",
    borderWidth: 1
  },
  loginBtnText: {
    color: "#E60001",
    fontWeight: 700
  },
  uKSmcMmD: {
    width: 160,
    height: 114
  }
});

const Button = ({
  title,
  btnStyle,
  textStyle,
  onPress
}) => {
  return <TouchableOpacity style={[btnStyles.btn, btnStyle]} onPress={onPress}>
      <Text style={[btnStyles.btnText, textStyle]}>{title}</Text>
    </TouchableOpacity>;
};

const btnStyles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#E60001",
    borderRadius: 6,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    margin: 5,
    width: deviceWidth - 80,
    minHeight: 45,
    marginVertical: 12
  },
  btnText: {
    color: "white",
    fontWeight: 700
  }
});
export default LoginScreen;