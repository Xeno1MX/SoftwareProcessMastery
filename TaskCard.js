// TaskCard.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TaskCard = ({ scenario, onSubmit, buttonColor }) => {
  const [answer, setAnswer] = React.useState('');

  return (
    <View style={styles.card}>
      <Text style={styles.scenarioText}>{scenario}</Text>
      <TextInput
        style={styles.input}
        value={answer}
        onChangeText={setAnswer}
        placeholder="Answer"
      />
      <Button title="Submit" onPress={() => onSubmit(answer)} color={buttonColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  scenarioText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default TaskCard;
