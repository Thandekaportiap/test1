import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Timetable = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={[styles.card, item.isBreak && styles.breakCard]}>
      {/* Left Column (Time) */}
      <Text style={[styles.time, item.isBreak && styles.breakText]}>{item.time}</Text>

      {/* Right Column (Subject and Teacher) */}
      {item.isBreak ? (
        <Text style={[styles.breakSubject, styles.rightColumn]}>Break</Text>
      ) : (
        <View style={styles.rightColumn}>
          <Text style={styles.subject}>{item.subject}</Text>
          <Text style={styles.teacher}>{item.teacher}</Text>
        </View>
      )}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: "row", // Align time and details in a row
    alignItems: "center",
    justifyContent: "space-between", // Space between time and details
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  breakCard: {
    backgroundColor: "#008f99",
  },
  time: {
    flex: 1, // Take up space on the left
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  breakText: {
    color: "#fff",
  },
  rightColumn: {
    flex: 3, // Take up more space on the right
    justifyContent: "flex-start",
  },
  subject: {
    fontSize: 16,
    fontWeight: "bold",
  },
  breakSubject: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  teacher: {
    fontSize: 14,
    color: "#666",
  },
});

export default Timetable;