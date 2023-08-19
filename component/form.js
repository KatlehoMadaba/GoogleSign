import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import questionsData from '../pages/q.json';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    // Initialize formData state with empty values for each question
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
      {questionsData.map((question) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.question}</Text>
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
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#f0f0f0',
    
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Form;
