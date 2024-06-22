// TaskScreen.js
import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TaskCard from './TaskCard';
import { useRoute, useNavigation } from '@react-navigation/native';

const TaskScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id, title, imageSrc } = route.params;

  const scenarios = [
    'A financial institution is developing a complex software system to manage online transactions and customer data. The project involves high risk and requires regular risk assessment and mitigation. Explain how the Spiral model addresses risk management in this project and outline the key activities in each spiral iteration.',
    'Which of the following phases of a system development life cycle (SDLC) should not be compressed so much for the proper development of a prototype?',
    'Scenario 3',
    // Add more scenarios as needed
  ];

  const handleSubmit = (answer) => {
    console.log('Submitted answer:', answer);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'< Study'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <ScrollView>
        {scenarios.map((scenario, index) => (
          <TaskCard key={index} scenario={scenario} onSubmit={handleSubmit} buttonColor="#D95151" />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 999,
    marginTop: 25,
    marginBottom: 10,
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TaskScreen;
