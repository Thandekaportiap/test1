import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AttendanceScreen from '@/components/AttendanceScreen'; 

import TimetableScreen from '../components/TimetableScreen'; 

import EventsScreen from '../components/EventsScreen';

const Tab = createMaterialTopTabNavigator();

const colorSchemes = {
  light: {
    text: '#008f99',
    background: '#fff',
    tint: '#008f99',
    tabIconDefault: '#ccc',
    tabIconSelected: '#008f99',
  },
  dark: {
    text: '#008f99',
    background: '#000',
    tint: '#008f99',
    tabIconDefault: '#ccc',
    tabIconSelected: '#008f99',
  },
};

export default function CalendarScreen() {
  const systemColorScheme = useColorScheme(); // Automatically detects light/dark mode
  const colorScheme = systemColorScheme === 'dark' ? colorSchemes.dark : colorSchemes.light;

  return (
    <>
      <View style={[styles.header, { backgroundColor: colorScheme.background }]}>
        <Text style={[styles.title, { color: colorScheme.tint }]}>Calendar</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colorScheme.tint,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: colorScheme.background },
          tabBarIndicatorStyle: { backgroundColor: colorScheme.tint },
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        }}
      >
        <Tab.Screen name="Attendance" component={AttendanceScreen} />
        <Tab.Screen name="Timetable" component={TimetableScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
