import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import medicalQuestions from '../qJSON/medical.json';


const MedicalHistory = () => {
    const [answers, setAnswers] = useState({});

    const handleAnswer = (questionId, answer) => {
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          [questionId]: answer,
        }));
      };
  return (
<ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Medical History</Text>
      <Image
        source={require('../images/Group82.png')}
        style={styles.image}
      />
      {medicalQuestions.map((question) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={[styles.questionText, styles.questionBackground]}>{question.question}</Text>
          <View style={styles.answerContainer}>
            <TouchableOpacity
              style={[
                styles.answerButton,
                answers[question.id] === 'Y' && styles.selectedAnswer,
              ]}
              onPress={() => handleAnswer(question.id, 'Y')}
            >
              <Text>Y</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.answerButton,
                answers[question.id] === 'N' && styles.selectedAnswer,
              ]}
              onPress={() => handleAnswer(question.id, 'N')}
            >
              <Text>N</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
            <TouchableOpacity 
      style={styles.btnSubmit}
      onPress={() => handleSubmit()}
      >
        <Text style={styles.btnTextSubmit}>Submit</Text>
      </TouchableOpacity>
      </ScrollView>
  )
}

export default MedicalHistory;

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#FFFFFF',
    //   flex: 1,
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
    },
    questionBackground: {
        backgroundColor: '#DEF3E4',
        padding: 5,
      },
    answerContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
    answerButton: {
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginRight: 10,
    },
    selectedAnswer: {
      backgroundColor: '#4CAF50',
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