import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HealthAssessment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/Blob.png')}
        style={styles.imageTop}
      />
      <Image
        source={require('../images/Blob2.png')}
        style={styles.imageBottom}
      />
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('MedicalHistory', { category: 'Medical History' })}
        >
          <Text style={styles.categoryTitle}>Medical History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('LifeStyleHistory', { category: 'Life Style History' })}
        >
          <Text style={styles.categoryTitle}>Life Style History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('Questions', { category: 'Medical Examination and Tests' })}
        >
          <Text style={styles.categoryTitle}>Medical Examination and Tests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('Questions', { category: 'Special Medical Investigations' })}
        >
          <Text style={styles.categoryTitle}>Special Medical Investigations</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HealthAssessment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around', 
  },
  imageTop: {
    width: 251,
    height: 254,
    position: 'absolute',
    top: -13,
    left: -52,
  },
  imageBottom: {
    width: 229,
    height: 209,
    position: 'absolute',
    bottom: 0,
    left: '50%', 
    transform: [{ rotate: '10deg' }],
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: windowHeight * -0.10, // Adjust the spacing from top
  },
  category: {
    width: windowWidth * 0.4, // Adjust button width
    height: windowWidth * 0.4, // Adjust button height
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
  },
});
