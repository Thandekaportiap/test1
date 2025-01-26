import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import Timetable from "../components/Timetable";

const TimetableScreen = () => {
  const timetableData = {
    Mo: [
      { id: "1", time: "07:00 - 07:45", subject: "English", teacher: "Samantha Lucas" },
      { id: "2", time: "07:45 - 08:30", subject: "Math", teacher: "James Miller" },
      { id: "3", time: "08:30 - 09:15", subject: "Science", teacher: "Olivia Smith" },
      { id: "4", time: "09:15 - 09:30", subject: "Break", isBreak: true },
      { id: "5", time: "09:30 - 10:15", subject: "History", teacher: "Emily Johnson" },
    ],
    Tu: [
      { id: "1", time: "07:00 - 07:45", subject: "Geography", teacher: "Daniel Brown" },
      { id: "2", time: "07:45 - 08:30", subject: "Chemistry", teacher: "Sarah Lee" },
      { id: "3", time: "08:30 - 09:15", subject: "Math", teacher: "James Miller" },
      { id: "4", time: "09:15 - 09:30", subject: "Break", isBreak: true },
      { id: "5", time: "09:30 - 10:15", subject: "English", teacher: "Samantha Lucas" },
    ],
    We: [
      { id: "1", time: "07:00 - 07:45", subject: "Geography", teacher: "Daniel Brown" },
      { id: "2", time: "07:45 - 08:30", subject: "Chemistry", teacher: "Sarah Lee" },
      { id: "3", time: "08:30 - 09:15", subject: "Math", teacher: "James Miller" },
      { id: "4", time: "09:15 - 09:30", subject: "Break", isBreak: true },
      { id: "5", time: "09:30 - 10:15", subject: "English", teacher: "Samantha Lucas" },
    ],
    Th: [
      { id: "1", time: "07:00 - 07:45", subject: "Geography", teacher: "Daniel Brown" },
      { id: "2", time: "07:45 - 08:30", subject: "Chemistry", teacher: "Sarah Lee" },
      { id: "3", time: "08:30 - 09:15", subject: "Math", teacher: "James Miller" },
      { id: "4", time: "09:15 - 09:30", subject: "Break", isBreak: true },
      { id: "5", time: "09:30 - 10:15", subject: "English", teacher: "Samantha Lucas" },
    ],
    Fr : [
      { id: "1", time: "07:00 - 07:45", subject: "Geography", teacher: "Daniel Brown" },
      { id: "2", time: "07:45 - 08:30", subject: "Chemistry", teacher: "Sarah Lee" },
      { id: "3", time: "08:30 - 09:15", subject: "Math", teacher: "James Miller" },
      { id: "4", time: "09:15 - 09:30", subject: "Break", isBreak: true },
      { id: "5", time: "09:30 - 10:15", subject: "English", teacher: "Samantha Lucas" },
    ],
    Sa : [
      { id: "1", time: "07:00 - 07:45", subject: "Geography", teacher: "Daniel Brown" },
      { id: "2", time: "07:45 - 08:30", subject: "Chemistry", teacher: "Sarah Lee" },
      { id: "3", time: "08:30 - 09:15", subject: "Math", teacher: "James Miller" },
      { id: "4", time: "09:15 - 09:30", subject: "Break", isBreak: true },
      { id: "5", time: "09:30 - 10:15", subject: "English", teacher: "Samantha Lucas" },
    ],
    Su : [
      { id: "1", time: "07:00 - 07:45", subject: "Geography", teacher: "Daniel Brown" },
      { id: "2", time: "07:45 - 08:30", subject: "Chemistry", teacher: "Sarah Lee" },
      { id: "3", time: "08:30 - 09:15", subject: "Math", teacher: "James Miller" },
      { id: "4", time: "09:15 - 09:30", subject: "Break", isBreak: true },
      { id: "5", time: "09:30 - 10:15", subject: "English", teacher: "Samantha Lucas" },
    ],
  };

  const dayNames = {
    Mo: "Monday",
    Tu: "Tuesday",
    We: "Wednesday",
    Th: "Thursday",
    Fr: "Friday",
    Sa: "Saturday",
    Su: "Sunday",
  };

  const dayDates = {
    Mo: 14,
    Tu: 15,
    We: 16,
    Th: 17,
    Fr: 18,
    Sa: 19,
    Su: 20,
  };

  const [selectedDay, setSelectedDay] = useState("Mo");



  const getCurrentDate = () => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <View style={styles.container}>
    
      {/* Days of the Week */}
      <View style={styles.daysContainer}>
  {Object.keys(timetableData).map((day) => (
    <TouchableOpacity
      key={day}
      style={[styles.dayButton, selectedDay === day && styles.activeDayButton]}
      onPress={() => setSelectedDay(day)}
    >
      <Text style={[styles.dayText, selectedDay === day && styles.activeDayText]}>
        {day} 
      </Text>
      <Text style={[styles.dayText, selectedDay === day && styles.activeDayText]}>
      {dayDates[day]} 
      </Text>
    </TouchableOpacity>
  ))}
</View>


       {/* Header with active day and date */}
       <View style={styles.headerContainer}>
        <Text style={styles.header}>
          {dayNames[selectedDay]} - {getCurrentDate()}
        </Text>
      </View>


      {/* Timetable List */}
      <Timetable data={timetableData[selectedDay]} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  headerContainer: {
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "#333",
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  dayButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "white",
  },
  activeDayButton: {
    backgroundColor: "#008f99",
  },
  dayText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  activeDayText: {
    color: "#fff",
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
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
});

export default TimetableScreen;