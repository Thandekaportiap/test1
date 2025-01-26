import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function NotificationScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Notification</Text>

      {/* Today's Notifications */}
      <Text style={styles.sectionHeader}>Today</Text>
      <View style={styles.notificationCard}>
        <View style={styles.row}>
          <Text style={styles.title}>Parents - Teachers Meeting</Text>
          <Text style={styles.time}>8:00 AM</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="clock-o" size={16} color="#6C6C6C" />
          <Text style={styles.time}>09:00 - 10:00 am</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join Meeting</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.notificationCard}>
        <View style={styles.row}>
          <Text style={styles.title}>Homework Reminder</Text>
          <Text style={styles.time}>8:00 AM</Text>
        </View>
        <Text style={styles.description}>
          You have a homework assignment due tomorrow. Please make sure to complete it.
        </Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Got it</Text>
        </TouchableOpacity>
      </View>

     
      <Text style={styles.sectionHeader}>Yesterday</Text>
      <View style={styles.notificationCard}>
        <Text style={styles.title}>Payment Successful</Text>
        <View style={styles.row}>
          <FontAwesome name="check-circle" size={16} color="green" />
          <Text style={styles.description}>
            Your balance has been recharged with 200 LE.
          </Text>
        </View>
      </View>

      <View style={styles.notificationCard}>
        <View style={styles.row}>
          <Text style={styles.title}>Parents - Teachers Meeting</Text>
          <Text style={styles.time}>8:00 AM</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="clock-o" size={16} color="#6C6C6C" />
          <Text style={styles.time}>09:00 - 10:00 am</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join Meeting</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.notificationCard}>
        <View style={styles.row}>
          <Text style={styles.title}>Homework Reminder</Text>
          <Text style={styles.time}>8:00 AM</Text>
        </View>
        <Text style={styles.description}>
          You have a homework assignment due tomorrow. Please make sure to complete it.
        </Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Got it</Text>
        </TouchableOpacity>
      </View>

     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
    color: '#008f99', 
  },
  notificationCard: {
    backgroundColor: '#F9F9F9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#008f99', // Updated color for consistency
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  time: {
    fontSize: 14,
    color: '#6C6C6C',
    marginLeft: 8,
    alignSelf: 'flex-end',
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#008f99',
    borderRadius: 4,
    marginTop: 8,
    backgroundColor: '#ffffff', // Button background for visibility
  },
  button1: {
    alignSelf: 'flex-end',
    paddingVertical: 6,
    paddingHorizontal: 33,
    borderWidth: 1,
    borderColor: '#008f99',
    borderRadius: 4,
    marginTop: 8,
    backgroundColor: '#ffffff', // Button background for visibility
  },
  buttonText: {
    color: '#008f99',
    fontSize: 14,
    fontWeight: 'bold',
  },
});