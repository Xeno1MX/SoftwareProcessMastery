// ClassCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ClassCard = ({ imageUri, modelText, subtitle, lecture, className, classDetails, onLearnPress, onTaskPress }) => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={navigateToHome}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Study</Text>
      </View>
      <View style={styles.content}>
        <Image source={imageUri} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.modelText}>{modelText}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.lecture}>{lecture}</Text>
          <Text style={styles.className}>{className}</Text>
          <Text style={styles.classDetails}>{classDetails}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onLearnPress}>
          <Text style={styles.buttonText}>Learn About Model</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={onTaskPress}>
          <Text style={styles.buttonText}>Task 1</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
    marginTop: 25,
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '55%',
    borderRadius: 5,
    marginBottom: 10,
    resizeMode: "contain",
  },
  info: {
    alignItems: 'center',
    marginBottom: 16,
  },
  modelText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  lecture: {
    fontSize: 14,
    color: '#888',
  },
  className: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  classDetails: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ClassCard;
