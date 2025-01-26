import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import * as Progress from "react-native-progress";

export default function Chart() {
  const data = [
    { label: "Behaviour", progress: 0.3, color: "#4a90e2" },
    { label: "Attendance", progress: 0.4, color: "#50e3c2" },
    { label: "Meals and snack", progress: 0.5, color: "#4a90e2" },
    { label: "Physical Dev", progress: 0.6, color: "#b8e986" },
    { label: "Personal needs", progress: 0.7, color: "#f5a623" },
    { label: "Health Observation", progress: 0.8, color: "#d0021b" },
    { label: "Activities and learn", progress: 0.9, color: "#4a90e2" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Daily Report</Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          These results are obtained from the syllabus completion in the respective class.
        </Text>
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.label}>{item.label}</Text>
          <Progress.Bar
            progress={item.progress}
            width={200}
            color={item.color}
            style={styles.progressBar}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  infoBox: {
    backgroundColor: "#e6f9e6",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 40,
  },
  infoText: {
    fontSize: 14,
    color: "#3c763d",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  progressBar: {
    flex: 2,
  },
});