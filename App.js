import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen'; // Assuming your HomeScreen is renamed from HomePage
import ClassScreen1 from './ClassScreen1';
import ClassScreen2 from './ClassScreen2';
import ClassScreen3 from './ClassScreen3';
import ClassScreen4 from './ClassScreen4';
import ClassScreen5 from './ClassScreen5';
import ClassScreen6 from './ClassScreen6';
import LearnScreen1 from './LearnScreen1';
import LearnScreen2 from './LearnScreen2';
import LearnScreen3 from './LearnScreen3';
import LearnScreen4 from './LearnScreen4';
import LearnScreen5 from './LearnScreen5';
import TaskScreen from './TaskScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Hide header for the login screen
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Hide header for the home screen
        />
        <Stack.Screen 
            name="Class1" 
            component={ClassScreen1} 
            options={{ headerShown: false }}
        />
        <Stack.Screen 
            name="Class2" 
            component={ClassScreen2} 
            options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Class3" 
        component={ClassScreen3} 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
            name="Class4" 
            component={ClassScreen4} 
            options={{ headerShown: false }}
        />
        <Stack.Screen 
            name="Class5" 
            component={ClassScreen5} 
            options={{ headerShown: false }}
        />
        <Stack.Screen 
            name="Class6" 
            component={ClassScreen6} 
            options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Learn1"
          component={LearnScreen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Learn2"
          component={LearnScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Learn3"
          component={LearnScreen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Learn4"
          component={LearnScreen4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Learn5"
          component={LearnScreen5}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="TaskScreen" 
          component={TaskScreen}
          options={{ headerShown: false }} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
