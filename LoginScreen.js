import React from 'react';
import { StyleSheet, View, ImageBackground, Pressable, Text } from 'react-native';
import backgroundImage from './assets/bg2.png'; 

const LoginScreen = ({ navigation }) => {
    const handlePress = () => {
        console.log('Button pressed');
        if (navigation) {
            navigation.navigate("Home");
        } else {
            console.log('Navigation prop is not defined');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImage}
                style={styles.background}
            >
                <View style={styles.overlay}>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#555555' : '#333333',
                                },
                                styles.button,
                            ]}
                            onPress={handlePress}
                        >
                            <Text style={styles.buttonText}>Get Started</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 30,
    },
    buttonContainer: {
        marginBottom: 30,
        borderRadius: 50,
        overflow: 'hidden',
        width: '80%',
    },
    button: {
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
});

export default LoginScreen;
