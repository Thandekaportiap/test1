import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { AuthProvider } from './src/context/AuthContext'; // Ensure AuthProvider is defined
import LoginScreen from './src/screens/loginScreen';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/profile';
import NotificationScreen from './src/screens/notifications';
import ResetPWDScreen from './src/screens/resetPwd';
import OTPScreen from './src/screens/otpScreen';

import HomeworksScreen from './src/models/Homework';
import TeacherProfile from './src/models/TeacherProfile';

import ChatScreen from './src/screens/chats';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Profile') {
          iconName = 'person';
        } else if (route.name === 'Notification') {
          iconName = 'notifications';
        } else if (route.name === 'Calendar') {
          iconName = 'calendar';
        } else if (route.name === 'Chat') {
          iconName = 'chatbubbles';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#008f99',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}  />
    <Tab.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }}  />
    {/* <Tab.Screen name="Calendar" component={CalendarScreen} /> */}
    <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }}  />
  </Tab.Navigator>
);

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          
          <Stack.Screen name="HomeTabs" component={BottomTabs} options={{ headerShown: false }} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPWDScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Homework" component={HomeworksScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TeacherProfile" component={TeacherProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
