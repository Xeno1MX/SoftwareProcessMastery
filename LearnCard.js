// LearnCard.js
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LearnCard = ({ title, imageUri, caption, learningMaterial, videoContent }) => {
  const navigation = useNavigation();

  // Check if imageUri is a local image or a URL
  const imageSource = typeof imageUri === 'number' ? imageUri : { uri: imageUri };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{'< Model'}</Text>
      </TouchableOpacity>
      <Text style={styles.header}>{title}</Text>
      <Image
        source={imageSource}
        style={styles.image}
      />
      <Text style={styles.imageCaption}>{caption}</Text>
      <View style={styles.card}>
        <Text style={styles.cardHeader}>Learning Material</Text>
        <Text>{learningMaterial}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardHeader}>Video About Model</Text>
        <Text>{videoContent}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 25,
    marginBottom: 10,
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: '55%',
    borderRadius: 10,
    marginBottom: 1,
    resizeMode: "contain",
  },
  imageCaption: {
    textAlign: 'center',
    marginVertical: 8,
    fontStyle: 'italic',
  },
  card: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default LearnCard;
