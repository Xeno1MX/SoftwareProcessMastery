// ClassScreen6.js
import React from 'react';
import { ScrollView } from 'react-native';
import ClassCard from './ClassCard';
import localImage from './assets/img1.png'; // Adjust the path as needed

const ClassScreen6 = ({ navigation, route }) => {
    const { id, title, imageSrc } = route.params;
  
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ClassCard
          imageUri={localImage} // Use the local image here
          modelText={title}
          subtitle="Lecture"
          lecture="Profesor Madya Dr. Suliana binti Sulaiman"
          className="Class"
          classDetails="Software Process"
          onLearnPress={() => navigation.navigate('LearnAboutModel')}
          onTaskPress={() => navigation.navigate('Task1')}
        />
      </ScrollView>
    );
  };
  
  export default ClassScreen6;