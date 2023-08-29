import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/elements';

import Menu from './pages/menu';
import HealthAssessment from './pages/healthAssessment';
import Login from './pages/login';
import SignUp from './pages/signup';
import Welcome from './pages/welcome';
import LifeStyleHistory from './questions/lifeStyle';
import { SafeAreaView } from 'react-native';
import MedicalHistory from './questions/medical';

const Stack = createStackNavigator();
const SubStack = createStackNavigator();

const CustomHeader = ({ navigation }) => {
  return (
    <HeaderBackButton
      onPress={() => navigation.goBack()}
      label="Back"
    />
  );
};

const HealthAssessmentStack = () => {
  return (
    <SubStack.Navigator>
      <SubStack.Screen name="HealthAssessment" component={HealthAssessment} options={{ headerShown: false }} />
      <SubStack.Screen name="LifeStyleHistory" component={LifeStyleHistory} options={{ headerShown: false }} />
      <SubStack.Screen name="MedicalHistory" component={MedicalHistory} options={{headerShown:false}}/>
    </SubStack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route }) => ({
            header: (props) => {
              if (route.name === 'Welcome') {
                return null;
              }
              return <CustomHeader {...props} />;
            },
            headerShown: true,
          })}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="HealthAssessment" component={HealthAssessmentStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
