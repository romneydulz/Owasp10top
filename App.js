import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './components/cadastro';
import Header from './components/header';
import Login from './components/Login';
import Top10owasp from './components/top10owasp';

function HomeScreen() {
    return (
        <View>
            <Header />
           
            <Top10owasp />
            
            
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App(){

 return(
    
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={HomeScreen} />
        </Stack.Navigator>
        </NavigationContainer> 

 );
}

export default App;