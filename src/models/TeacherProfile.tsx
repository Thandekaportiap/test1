
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function TeacherProfile() {

    const navigation = useNavigation();

    const teacher = {
        name: "Thandeka",
        class: "B.Tech",
        qualification: "Computer Science",
        about: "I am a student of Computer Science at University of Moratuwa. I am a passionate learner and love to explore new technologies. I am always looking for opportunities to learn and grow. I am excited about the future of technology and how it can change the world.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    };
  return (
    <View style={styles.card}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      <Text style={styles.title}>Teacher Profile</Text>
      <Image source={{ uri: teacher.image }} style={styles.image} />
      <Text style={styles.text}>
        <Text style={styles.label}>Name:</Text> {teacher.name}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Class:</Text> {teacher.class}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Qualification:</Text> {teacher.qualification}
      </Text>
      <Text style={[styles.aboutHeader]}>About:</Text>
      <Text style={styles.about}>{teacher.about}</Text>
      <TouchableOpacity>
        <Text style={styles.contact}>Contact Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,

  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  image: {
    width: 200,
    height: 200,
  alignSelf: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
  },
  label: {
    fontWeight: "bold",
  },
  aboutHeader: {
    marginTop: 10,
    alignItems: "center",
  },
  about: {
    textAlign: "center",
    marginVertical: 10,
  },
  contact: {
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "center",
  },
});
