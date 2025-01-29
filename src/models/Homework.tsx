import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeworkScreen = () => {
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState('15');
  const [selectedSubject, setSelectedSubject] = useState('All');

  const days = [
    { day: 'Mo', date: '11' },
    { day: 'Tu', date: '12' },
    { day: 'We', date: '13' },
    { day: 'Th', date: '14' },
    { day: 'Fr', date: '15' },
    { day: 'Sa', date: '16' },
    { day: 'Su', date: '17' },
  ];

  const subjects = ['All', 'Math', 'English Language', 'Arabic'];

  const assignments = [
    {
      subject: 'Math',
      teacher: 'Mr. Osama',
      description: 'The math assignment involves solving pages 20 to 23 from the school textbook.',
      dueDate: 'Fri 15 April 2024',
    },
    {
      subject: 'Science',
      teacher: 'Mrs. Joan',
      description: "Complete the first 10 problems from page 15 using Kirchhoff's Law from the school textbook.",
      dueDate: 'Fri 15 April 2024',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Homework</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Calendar Strip */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.calendarStrip}>
        {days.map((item) => (
          <TouchableOpacity
            key={item.date}
            style={[
              styles.dayContainer,
              selectedDay === item.date && styles.selectedDayContainer,
            ]}
            onPress={() => setSelectedDay(item.date)}
          >
            <Text
              style={[
                styles.dayText,
                selectedDay === item.date && styles.selectedDayText,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                styles.dateText,
                selectedDay === item.date && styles.selectedDayText,
              ]}
            >
              {item.date}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Subject Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.subjectTabs}>
        {subjects.map((subject) => (
          <TouchableOpacity
            key={subject}
            style={[
              styles.subjectTab,
              selectedSubject === subject && styles.selectedSubjectTab,
            ]}
            onPress={() => setSelectedSubject(subject)}
          >
            <Text
              style={[
                styles.subjectText,
                selectedSubject === subject && styles.selectedSubjectText,
              ]}
            >
              {subject}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Assignments List */}
      <ScrollView style={styles.assignmentsList}>
        {assignments.map((assignment, index) => (
          <View key={index} style={styles.assignmentCard}>
            <View style={styles.assignmentHeader}>
              <Text style={styles.subjectTitle}>{assignment.subject}</Text>
              <Text style={styles.dueDate}>{`Due: ${assignment.dueDate}`}</Text>
            </View>
            <Text style={styles.teacherName}>{assignment.teacher}</Text>
            <Text style={styles.assignmentDescription}>{assignment.description}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  calendarStrip: {
    marginBottom: 16,
  },
  dayContainer: {
    alignItems: 'center',
    marginRight: 20,
    paddingVertical: 8,
  },
  selectedDayContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#00BCD4',
  },
  dayText: {
    fontSize: 14,
    color: '#9E9E9E',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 16,
    color: '#9E9E9E',
  },
  selectedDayText: {
    color: '#008f99',
    fontWeight: '500',
  },
  subjectTabs: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  subjectTab: {
    marginRight: 24,
    paddingBottom: 8,
  },
  selectedSubjectTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#008f99',
  },
  subjectText: {
    fontSize: 16,
    color: '#9E9E9E',
  },
  selectedSubjectText: {
    color: '#008f99',
    fontWeight: '500',
  },
  assignmentsList: {
    paddingHorizontal: 16,
  },
  assignmentCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#008f99',
  },
  assignmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  subjectTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  dueDate: {
    fontSize: 14,
    color: '#008f99',
  },
  teacherName: {
    fontSize: 14,
    color: '#9E9E9E',
    marginBottom: 8,
  },
  assignmentDescription: {
    fontSize: 14,
    color: '#616161',
    lineHeight: 20,
  },
});

export default HomeworkScreen;
