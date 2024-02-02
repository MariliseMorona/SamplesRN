import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Forms from '../screens/Forms/Forms';
import { Logo } from '../components/LogoImage/Logo';

const Stack = createNativeStackNavigator();

 const Routes:React.FC = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home"component={Home} options={{headerShown: false}}/>
             <Stack.Screen name="Forms" component={Forms} options={{headerShown: true, headerTitle: "", headerTintColor: 'black'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;