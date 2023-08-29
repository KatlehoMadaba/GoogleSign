import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import questionsData from '../qJSON/lifeStyle.json';
import axios from 'axios';

const LifeStyleHistory = () => {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    
    const initialFormData = {};
    questionsData.forEach((question) => {
      initialFormData["q"+question.id] = "";
    });
    setFormData(initialFormData);
  }, []);



  useEffect(()=>{
    console.log(formData)
  },[formData])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/questions');
      setData(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  

  const handleInputChange = (questionId, value) => {
    setFormData({ ...formData, ["q"+questionId]: value });
    console.log(formData)
  };

  const handleSubmit = async () => {
    // Do something with the form data, e.g., submit it to a server
    console.log('new', formData);
    try {
      const response = await axios.post("http://localhost:3000/question", formData);
      console.log('new: ', response.data); // Optional: handle the server response
      // Clear form fields after successful submission
    setFormData('');
    //navigation.navigate('SignUp')
    console.log("successful")
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lifestyle History</Text>
      <Image
        source={require('../images/Group82.png')}
        style={styles.image}
      />
      {questionsData.map((question) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={[styles.questionText, styles.questionBackground]}>{question.question}</Text>
          {question.type === 'text' ? (
            <TextInput
              style={styles.input}
              value={formData[question.id]}
              onChangeText={(text) => handleInputChange(question.id, text)}
            />
          ) : (
            <TextInput
              style={styles.input}
              value={formData[question.id]}
              onChangeText={(number) => handleInputChange(question.id, number)}
              keyboardType="numeric"
            />
          )}
        </View>
      ))}
      {/* <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity> */}
      <TouchableOpacity 
      style={styles.btnSubmit}
      onPress={() => handleSubmit()}
      >
        <Text style={styles.btnTextSubmit}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


export default LifeStyleHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 308.1499938964844,
    height: 360.62652587890625,
    position: 'absolute',
    top: 94,
    left: 23,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  questionBackground: {
    backgroundColor: '#DEF3E4',
    padding: 5,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  btnSubmit: {
    width: 300,
    alignSelf: 'center', 
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 50,
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  btnTextSubmit: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
