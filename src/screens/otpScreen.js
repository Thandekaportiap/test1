import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Appbar } from "react-native-paper";
import Svg, { Circle, Defs, ClipPath, Rect } from "react-native-svg";

const EnterOTPScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header1}>
        {/* SVG Half-Circle */}
        <Svg height="200" width={Dimensions.get("window").width} style={styles.svgContainer}>
          <Defs>
            <ClipPath id="clip">
              <Rect x="0" y="100" width={Dimensions.get("window").width} height="100" />
            </ClipPath>
          </Defs>
          <Circle cx={Dimensions.get("window").width / 2} cy="0" r="200" fill="#008f99" clipPath="url(#clip)" />
        </Svg>

        {/* Appbar */}
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction
            onPress={() => console.log("Back Pressed")}
            theme={{ colors: { primary: "#fff" } }}
          />
          <Appbar.Content
            title="Enter OTP"
            theme={{ colors: { primary: "#fff" } }}
          />
        </Appbar.Header>

        <Text style={styles.subheaderText}>
          Please enter the OTP sent to {"\n"}your email
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.email}>mostafagafaar0@gmail.com</Text>

        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleOtpChange(index, text)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.resendText}>
            Resend OTP <Text style={styles.timerText}>(00:32)</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header1: {
    backgroundColor: "#008f99",
    borderBottomLeftRadius: 89,
    borderBottomRightRadius: 89,
    paddingBottom: 20,
  },
  svgContainer: {
    position: "absolute",
    top: -15,
    left: 0,
    right: 0,
  },
  header: {
    backgroundColor: "transparent",
    elevation: 0,
  },
  subheaderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 40,
    marginTop: 10,
  },
  content: {
    marginTop: 65,
    alignItems: "center",
  },
  email: {
    fontSize: 14,
    color: "#008f99",
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  otpInput: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
  button: {
    backgroundColor: "#008f99",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 150,
    alignItems: "center",
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resendText: {
    color: "#555",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 100,
    textAlign: "center",
  },
  timerText: {
    color: "#008f99",
    fontWeight: "600",
  },
});

export default EnterOTPScreen;