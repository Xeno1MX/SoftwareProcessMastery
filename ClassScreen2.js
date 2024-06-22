// ClassScreen2.js
import React from 'react';
import { ScrollView } from 'react-native';
import ClassCard from './ClassCard';
import localImage from './assets/m2.png'; // Adjust the path as needed

const ClassScreen2 = ({ navigation }) => {
  const id = 2;
  const title = "Rapid Application Development Model";
  const imageSrc = localImage; // Ensure this is the correct local image reference

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ClassCard
        imageUri={localImage} // Use the local image here
        modelText={title}
        subtitle="Lecture"
        lecture="Profesor Madya Dr. Suliana binti Sulaiman"
        className="Class"
        classDetails="Software Process"
        onLearnPress={() => navigation.navigate('Learn2', { id, title, imageSrc })}
        onTaskPress={() => navigation.navigate('Task1')}
      />
    </ScrollView>
  );
};

export default ClassScreen2;