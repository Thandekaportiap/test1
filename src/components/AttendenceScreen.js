import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ProgressBar, Title } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

const COLORS = {
  primary: '#008f99',
  secondary: '#e6f7ff',
  text: '#333',
  lightText: '#555',
  absent: '#dc3545',
  present: '#4bc66e',
  background: '#fafafa',
};

const cardData = [
  {
    title: 'Present Month Attendance',
    stats: [
      { label: '75% Present', color: COLORS.present },
      { label: '25% Absent', color: COLORS.absent },
    ],
  },
  {
    title: 'April Attendance',
    stats: [
      { label: '80% Present', color: COLORS.present },
      { label: '20% Absent', color: COLORS.absent },
    ],
  },
  {
    title: 'March Attendance',
    stats: [
      { label: '80% Present', color: COLORS.present },
      { label: '20% Absent', color: COLORS.absent },
    ],
  },
];

const AttendanceStats = ({ title, value, color }) => (
  <View style={[styles.stat]}>
    <Text style={styles.statTitle}>{title}</Text>
    <Text style={[styles.statValue, { color }]}>{value}</Text>
  </View>
);

const AttendanceCard = ({ title, stats }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <View style={styles.cardStats}>
      {stats.map((stat, index) => (
        <Text key={index} style={[styles.cardStat, { color: stat.color }]}>
          {stat.label}
        </Text>
      ))}
      <TouchableOpacity style={styles.viewButton}>
      <Text style={styles.viewButtonText}>View </Text>
    </TouchableOpacity>
    </View>
    
  </View>
);

const AttendanceScreen = () => (
  <ScrollView style={styles.container}>
    {/* Attendance Summary */}
    <View style={styles.attendanceSummary}>
      <ProgressBar progress={0.75} color={COLORS.primary} style={styles.progressBar} />
      <Text style={styles.progressText}>75% Overall Attendance</Text>
      <View style={styles.statsContainer}>
        <AttendanceStats title="Total Present" value="90 days" color={COLORS.present} />
        <AttendanceStats title="Total Absent" value="15 days" color={COLORS.absent} />
      </View>
    </View>

    {/* Monthly Attendance */}
    <View style={styles.monthlyAttendance}>
      <TouchableOpacity style={styles.dateSelector}>
        <Text style={styles.dateSelectorText}>Select Date</Text>
        <FontAwesome5 name="calendar-alt" size={20} color={COLORS.lightText} />
      </TouchableOpacity>

      {cardData.map((card, index) => (
        <AttendanceCard key={index} title={card.title} stats={card.stats} />
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  attendanceSummary: {
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    elevation: 3,
  },
  progressBar: {
    width: '100%',  // Ensure it takes full width
    height: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  progressText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  stat: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
  },
  statTitle: {
    fontSize: 14,
    color: COLORS.lightText,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  monthlyAttendance: {
    marginTop: 10,
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginBottom: 20,
  },
  dateSelectorText: {
    fontSize: 16,
  },
  card: {
    marginBottom: 30,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: COLORS.text,
  },
  cardStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  cardStat: {
    fontSize: 16,
    fontWeight: '600',
  },
  viewButton: {
    flexDirection: 'row', 
    justifyContent: 'flex-end',
    alignItems: 'center', 
  },
  viewButtonText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});

export default AttendanceScreen;