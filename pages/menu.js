import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Menu = () => {
 
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
          <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('Questions', {category: 'health-assessment'})}
          >
              <Text style={styles.categoryTitle}>Health Assessment</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('Questions', {category: 'education'})}
          >
              <Text style={styles.categoryTitle}>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('Questions', {category: 'program-participation'})}
          >
              <Text style={styles.categoryTitle}>Program Participation and Activity Tracking</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('Questions', {category: 'incentive-tracking'})}
          >
              <Text style={styles.categoryTitle}>Incentive Tracking</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('Questions', {category: 'behavior-change'})}
          >
              <Text style={styles.categoryTitle}>Support for Behavior Change</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('Questions', {category: 'healthy-culture'})}
          >
              <Text style={styles.categoryTitle}>Support for a Healthy Culture</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('Questions', {category: 'holistic-focus'})}
          >
              <Text style={styles.categoryTitle}>Holistic Focus</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('Questions', {category: 'employee-progress'})}
          >
              <Text style={styles.categoryTitle}>Measure Employee Progress</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  
}

export default Menu

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    categoryContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 50,
    },
    category:{
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryTitle:{
        fontSize: 20,
        // fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000'
    }
  });