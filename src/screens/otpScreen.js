
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const EnterOTPScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <LinearGradient
          colors={["#00d5e3", "#009ea9"]}
          style={styles.beforeElement}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
        <LinearGradient
          colors={["#00d5e3", "#009ea9"]}
          style={styles.afterElement}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.title}>Enter OTP</Text>
        </View>
        <Text style={styles.subtitle}>Please enter the code we just sent {"\n"} to your email</Text>
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

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeTabs")}>
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
    backgroundColor: "#f5fafd",
  },
  header: {
    position: "relative",
    justifyContent: "flex-start",
    marginBottom: 10,
    height: 180,
    width: "100%",
  },
  beforeElement: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 180,
    width: "50%",
    borderBottomLeftRadius: 100,
  },
  afterElement: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 180,
    width: "50%",
    borderBottomRightRadius: 100,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 30,
    zIndex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "normal",
    color: "#ffffff",
    marginLeft: 10,
    textShadowColor: "#00000050",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 16,
    color: "#ffffff",
    marginLeft: 45,
    marginTop: 10,
    textShadowColor: "#00000050",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  content: {
    marginTop: 40,
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