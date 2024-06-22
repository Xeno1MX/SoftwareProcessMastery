// LearnScreen1.js
import React from 'react';
import { useRoute } from '@react-navigation/native';
import LearnCard from './LearnCard'; // Adjust the path as necessary

const LearnScreen5 = () => {
  const route = useRoute();
  const { id, title, imageSrc } = route.params;

  // Debug log to ensure parameters are received correctly
  console.log("LearnScreen5 params:", { id, title, imageSrc });

  return (
    <LearnCard
      title={`Learn About ${title}`}
      imageUri={imageSrc} // Use the image passed from the ClassScreen
      caption="Throwaway Prototyping Model"
      learningMaterial={`This is the learning material for ${title}.`}
      videoContent={`This is the video content for ${title}.`}
    />
  );
};

export default LearnScreen5;
