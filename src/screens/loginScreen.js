import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const LoginScreen = ({ navigation }) => {
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (!idNumber || !password) {
      Alert.alert("Error", "Please enter ID number and password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Success", "Logged in successfully.");
      // Navigate to Home after successful login
      navigation.navigate("HomeTabs");
    }, 2000);
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
          <Text style={styles.title}>Welcome Back!</Text>
        </View>
        <Text style={styles.subtitle}>Login to continue</Text>
        <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      </View>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter ID Number"
            value={idNumber}
            onChangeText={setIdNumber}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye-off" : "eye"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.rememberMeContainer}>
  <View style={styles.rememberMeWrapper}>
    <Checkbox value={rememberMe} onValueChange={setRememberMe} />
    <Text style={styles.rememberMeText} numberOfLines={1}>
      Remember Me
    </Text>
  </View>
  <TouchableOpacity onPress={() => navigation.navigate("ResetPasswordScreen")}>
    <Text style={styles.forgotPasswordText} numberOfLines={1}>
      Forgot Password?
    </Text>
  </TouchableOpacity>
</View>


        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
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
    marginBottom: 30,
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
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
    top: 20,
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
    marginTop: 6,
    textShadowColor: "#00000050",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  inputContainer: {
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
  rememberMeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, // Allow text to take up space
  },
  rememberMeText: {
    fontSize: 14,
    marginLeft: 3,
    flexShrink: 1, // Prevent text from being cut
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#008f99",
    flexShrink: 1, // Prevent overflow
  },
  
  button: {
    backgroundColor: "#008f99",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonDisabled: {
    backgroundColor: "#80cdd1",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
