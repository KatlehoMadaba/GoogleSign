import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation()
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.tcontainer}>
                    <View style={styles.ellipse}></View>
                    <Image
                        source={require('../images/doctor.png')}
                        style={styles.image}
                    />
                    <View style={styles.textCover}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Wellness</Text>

                            <View style={styles.subText}>
                                <Text style={{color: '#8D90A1', fontSize: 10, fontWeight: 600}}>WELCOME</Text>
                                <Text style={{
                                    fontWeight: '600',
                                    fontSize: 34,
                                    color: '#2A2A37',
                                    paddingTop: 5
                                }}>Start taking care of your health.</Text>

                                <View style={styles.btnContainer}>
                                    <TouchableOpacity 
                                    style={styles.btnSignIn}
                                    onPress={() => navigation.navigate('SignUp')}>
                                        <Text style={styles.btnTextSignIn}>Sign now with Email</Text>
                                    </TouchableOpacity>

                                    <View style={styles.buttonSpace}></View>

                                    <TouchableOpacity 
                                    style={styles.btnSignUp}
                                    onPress={() => navigation.navigate('Login')}>
                                        <Text style={styles.btnTextSignUp}>Login</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    tcontainer:{
      backgroundColor: '#EFFAF8',
      height: 415,
      // top: 20,
      left: 1,
      borderBottomLeftRadius: 260,
    },
    textCover:{
      backgroundColor: '#FFFFFF',
      height: 500,
    },
    textContainer: {
      width: 327, 
      height: 304, 

      left: 24,
      flexDirection: 'column',

      marginTop: 60, 
    },
    text: {
      fontSize: 30,
      fontWeight: 600,
      color: '#1B7F37',
      
    },
    subText: {
      top: 40,
      width: '80%'
    },
    container:{
      backgroundColor: '#FFFFFF',
      flex: 1,
    },
    image: {
      width: 350,
      height: 400,
      left: 53,
    },
    ellipse: {
      width: 470.0000046076746,
      height: 270.1404753549872,
      borderRadius: 100, // Use a high value for rounded corners to simulate an ellipse
      top: 150,
      // right: '-50',
      left: 10,
      backgroundColor: '#D9D9D9',
      transform: [{ rotate: '25.69deg' }], // Apply rotation
      position: 'absolute',
    },
    btnContainer:{
      width: 327,
      height: 116,
      paddingTop: 30
    },
    btnSignIn: {
      width: 327,
      height: 'auto',
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderRadius: 16,
      backgroundColor: '#4CAF50',
      flexDirection: 'row', // To use gap
      alignItems: 'center', // To align text vertically centered
      justifyContent: 'center', // To align text horizontally centered
      gap: 8,
  },
  btnTextSignIn: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  btnSignUp: {
    width: 327,
    height: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row', // To use gap
    alignItems: 'center', // To align text vertically centered
    justifyContent: 'center', // To align text horizontally centered
    paddingTop: 10,
    borderWidth: 1, // Border width in pixels
    borderColor: 'black', // Border color
    borderRadius: 16,
},
btnTextSignUp: {
  color: '#2A2A37',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center'
},
buttonSpace: {
  height: 16, // Add a space of 16 units between the buttons
},
});

export default Welcome;
