import React from "react";
import { View, Text, Image, Switch, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('../../assets/images/avantar.jpg')}
          style={styles.profileImage} 
        />
        <View>
          <Text style={styles.profileName}>Mostafa Mohamed</Text>
          <Text style={styles.profilePhone}>Phone number:{'\n'} 01067825598</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
        <MaterialIcons name="edit" size={24} color="#fff" style={styles.editIcon} />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <View style={styles.menu}>
        <MenuItem icon="account-edit" label="Edit Child Account" />
        <MenuItem icon="account-switch" label="Switch Account" />
        <MenuItem 
          icon="bell" 
          label="Notification" 
          switchEnabled={notificationsEnabled}
          toggleSwitch={() => setNotificationsEnabled(!notificationsEnabled)}
        />
        <MenuItem icon="cart" label="My Orders" />
        <MenuItem icon="wallet" label="My Balance" />
        <MenuItem icon="cash" label="Fees" />
        <MenuItem icon="cog" label="Settings" />
        <MenuItem icon="logout" label="Logout" />
      </View>
    </ScrollView>
  );
};

const MenuItem = ({ icon, label, switchEnabled, toggleSwitch }) => (
  <View style={styles.menuItem}>
    <MaterialCommunityIcons name={icon} size={24} color="#008f99" />
    <Text style={styles.menuText}>{label}</Text>
    {toggleSwitch !== undefined ? (
      <Switch 
        value={switchEnabled}
        onValueChange={toggleSwitch}
        trackColor={{ false: "#ddd", true: "#008f99" }}
      />
    ) : (
      <Ionicons name="chevron-forward" size={20} color="#aaa" />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  header: {
    backgroundColor: "#008f99",
    paddingHorizontal: 10,
    paddingVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
   borderRadius: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profilePhone: {
    color: "#f0f0f0",
    fontSize: 14,
  },
  editButton: {
    alignItems: "center", 
    justifyContent: "center",
  },
  
  editIcon: {
    width: 24,
    height: 24,
    marginBottom: 5, // Space between icon and text
  },
  
  editButtonText: {
    fontSize: 10,
    color: "#fff",
  },
  menu: {
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default ProfileScreen;