import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import additional images
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import feedbackIcon from './assets/icon1.png';

const images = [
  { id: 1, name: 'EP Model', src: img1 },
  { id: 2, name: 'RAD Model', src: img2 },
  { id: 3, name: 'Iterative Model', src: img3 },
  { id: 4, name: 'Incremental Model', src: img4 },
  { id: 5, name: 'Throwaway Prototype Model', src: img5 },
  { id: 6, name: 'Assessment', src: img6 },
];

function HomeScreen() {
  const navigation = useNavigation();

  const navigateToClassScreen = (image) => {
    if (image.id === 1) {
      navigation.navigate('Class1', {
        id: image.id,
        title: image.name,
        imageSrc: image.src,
      });
    } else if (image.id === 2) {
      navigation.navigate('Class2', {
        id: image.id,
        title: image.name,
        imageSrc: image.src,
      });
    } else if (image.id === 3) {
      navigation.navigate('Class3', {
        id: image.id,
        title: image.name,
        imageSrc: image.src,
      });
    } else if (image.id === 4) {
      navigation.navigate('Class4', {
        id: image.id,
        title: image.name,
        imageSrc: image.src,
      });
    } else if (image.id === 5) {
      navigation.navigate('Class5', {
        id: image.id,
        title: image.name,
        imageSrc: image.src,
      });
    } else if (image.id === 6) {
      navigation.navigate('TaskScreen', { // Navigate to TaskScreen for id 6
        id: image.id,
        title: image.name,
        imageSrc: image.src,
      });
    }
  };

  const navigateToFeedbackScreen = () => {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSeNziOMwSwNP6FqdyG5daryGcMhPRcpuDI9jYDuGOClMvf2KA/viewform?usp=sharing');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToFeedbackScreen} style={styles.feedbackButton}>
        <Image source={feedbackIcon} style={styles.feedbackIcon} />
      </TouchableOpacity>
      <Text style={styles.header}>STUDY</Text>
      <View style={styles.grid}>
        {images.map((image) => (
          <TouchableOpacity
            key={image.id}
            style={styles.card}
            onPress={() => navigateToClassScreen(image)}
          >
            <Image source={image.src} style={styles.imagePlaceholder} />
            <Text style={styles.imageLabel}>{image.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D95151',
    padding: 20,
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    width: '45%',
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
  },
  imagePlaceholder: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  imageLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  feedbackButton: {
    marginTop: 30,
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
  },
  feedbackIcon: {
    width: 50,
    height: 50,
  },
});

export default HomeScreen;
