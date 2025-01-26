import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import {Avatar, ListItem } from 'react-native-elements';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';



const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');

  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearchText(text);
  
  };

  return (
    <View style={styles.container}>
     <ScrollView contentContainerStyle={styles.content}>
     <ListItem >
      <Avatar
        title="MF"
        rounded
        size={60}
        source={require('../../assets/images/avantar.jpg')} 
      />
      <ListItem.Content>
        <ListItem.Subtitle style={styles.subtitle}>Hello</ListItem.Subtitle>
        <View style={styles.titleContainer}>
          <ListItem.Title style={styles.title}>Mostafa Fathy</ListItem.Title>
          <MaterialCommunityIcons name="hand-wave" size={24} color="gold" />
        </View>
      </ListItem.Content>
      <FontAwesome5 name="bell" size={24} color="black" />
    </ListItem>

    <View style={styles.searchContainer}>
    <MaterialIcons name="search" size={24} color="#888" style={styles.icon} />
<TextInput
    style={styles.input}
    placeholder="Search..."
    value={searchText}
    onChangeText={handleSearch}
    placeholderTextColor="blue"
/>
    </View>

    <Card style={styles.studentCard}>
  <View style={styles.cardContainer}>
    <View style={styles.avatarContainer}>
      <Avatar 
        source={require('../../assets/images/avantar.jpg')} 
        size={70} 
      />
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.whiteText}>Student Details</Text>
      <Card.Content>
        <Title style={styles.whiteText}>Mostafa Fathy</Title>
        <Paragraph style={styles.whiteText}>School ID: GH/03421</Paragraph>
        <Paragraph style={styles.whiteText}>Class: 02</Paragraph>
      </Card.Content>
    </View>
  </View>
  <Card.Actions style={styles.actionsContainer}>
    <TouchableOpacity style={styles.scanCodeButton}>
      <Icon name="qrcode-scan" size={24} color="#fff" />
      <Text style={styles.scanCodeText}>Scan Code</Text>
    </TouchableOpacity>
  </Card.Actions>
</Card>

        <View style={styles.exploreAcademicsCard}>
          <Text style={styles.sectionTitle}>Explore Academics</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.optionCard}>
              <Icon name="clipboard-text" size={24} color="#58b5bb" />
              <Text style={styles.optionText}>Daily Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCard}>
              <Icon name="book-open-variant" size={24} color="#58b5bb" />
              <Text style={styles.optionText}>Homework</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCard}>
              <Icon name="account-group" size={24} color="#58b5bb" />
              <Text style={styles.optionText}>Teachers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCard}>
            <SimpleLineIcons name="graduation" size={24} color="#58b5bb" />
              <Text style={styles.optionText}>Resultss</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCard}>
            <AntDesign name="shoppingcart" size={24} color="#58b5bb" />
              <Text style={styles.optionText}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCard}>
            <Ionicons name="receipt-outline" size={24} color="#58b5bb" />
              <Text style={styles.optionText}>Fees</Text>
            </TouchableOpacity>
          </View>
        </View>

         <View style={styles.section}>
      <Text style={styles.sectionTitle}>Recent Updates</Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.cardContainer}>
      
              <Card style={styles.updateCard}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Paragraph>30 April 2024 | Saturday</Paragraph>
            <Title>Parents Teachers Meeting</Title>
          </View>
          <Image 
            source={require('../../assets/images/meeting.jpg')}
            style={styles.image}
          />
        </Card.Content>
      </Card>
      <Card style={styles.updateCard}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Paragraph>30 April 2024 | Saturday</Paragraph>
            <Title>Parents Teachers Meeting</Title>
          </View>
          <Image 
            source={require('../../assets/images/meeting.jpg')}
            style={styles.image}
          />
        </Card.Content>
      </Card>
      <Card style={styles.updateCard}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Paragraph>30 April 2024 | Saturday</Paragraph>
            <Title>Parents Teachers Meeting</Title>
          </View>
          <Image 
            source={require('../../assets/images/meeting.jpg')}
            style={styles.image}
          />
        </Card.Content>
      </Card>
      </View>
      </ScrollView>
    </View> 
  
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8, 
  },
  content: {
    padding: 8,
  },
//Search input
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'gray',
  },

//Student Details
  studentCard: {
    flexDirection: 'column',
    padding: 1,
    backgroundColor: "#008f99",
    color: "#fff",
  },
  cardContainer: {
    flexDirection: 'row', 
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,       
  },
  avatarStyle: {
    borderRadius: 50,       
  },
  contentContainer: {
    flex: 1,             
  },
  actionsContainer: {
    justifyContent: 'flex-end', 
    flexDirection: 'row',
  },
  scanCodeButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  scanCodeText: {
    marginLeft: 1,
    color: "white",
  },
  whiteText: {
    color: 'white',   
  },
  
  // explore academics
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exploreAcademicsCard: {
    margin: 10,
    backgroundColor: '#fff',
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionCard: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: '#58b5bb',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 10,
    textAlign: 'center',
    color: "#58b5bb"
  },

  // updates
  cardContainer: {
    flexDirection: 'row', // Align cards horizontally
  },
  updateCard: {
    margin: 5,
    backgroundColor: '#c5e9ed',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 60,
    marginLeft: 10,
  },
});