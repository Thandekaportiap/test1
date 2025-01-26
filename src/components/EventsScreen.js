// src/components/EventsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.event}>
        <Image source={require('../assets/images/avantar.jpg')} style={styles.image} />
        <View>
          <Text style={styles.eventTitle}>Talent Hunt</Text>
          <Text>23 - 29 March 2019</Text>
          <Text>Yearly event of growth and curiosity building.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  event: {
    // Assuming some styles needed for event item
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, // Making the image circular
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});