import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ToastAndroid, Pressable, TouchableOpacity, FlatList, ActivityIndicator, TouchableOpacityComponent} from 'react-native';
import firebase from './firebaseCon';
import { styles } from "./styles";

console.disableYellowBox=true;

export default function Login(){

  //const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

async function forgotPassword(){

  await firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
          alert('Verifique sua caixa de e-mail.')
          navigation.navigate('Login')
      })
  .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
  });
}
  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then( (value) => {
     
      alert('Bem-vindo: ' + value.user.email);
      
      setUser(value.user.uid);
           
      navigation.navigate('Sobre', {  usuario:value.user.email} );
      navigation.navigate('Reservada', {  usuario:value.user.email} )
      navigation.navigate('Reservada', {  usuario:value.user.uid} )

    })
    .catch( (error) => {
        alert('Usuario ou senha incorretos!');
        return;
    })

    setEmail('');
    setPassword('');
  }


  async function logout(){
    await firebase.auth().signOut();
    setUser('');
    alert('Deslogou com sucesso!');
  }

  function Cadastrar(){
    navigation.navigate('Cadastro');
  }
  
  return(
    <View style={styles.box}>
      <Text style={styles.paragraph}>Email</Text>
      <TextInput style={styles.input} underlineColorAndroid="transparent" onChangeText={(texto) => setEmail(texto) } value={email} />

      <Text style={styles.paragraph}>Senha</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      type="password"
      onChangeText={(texto) => setPassword(texto) }
      value={password}
      />

    <Pressable onPress={logar} style={styles.btn}>
      <Text style={styles.tbtn}>Acessar</Text>
    </Pressable>

    <Text style={styles.paragraph}>
          {user}
    </Text>

    <Pressable style={styles.btn} onPress={forgotPassword}>
      <Text style={styles.tbtn}>Esqueci minha senha</Text>
    </Pressable>
    
    <Pressable onPress={Cadastrar} style={styles.btn}>
      <Text style={styles.tbtn}>Não sou cadastrado</Text>
    </Pressable>

      {user.length > 0 ? (<Pressable style={styles.btn} onPress={logout} ><Text style={styles.tbtn}>Deslogar</Text></Pressable>) : (
        <Text style={styles.paragraph}> Nenhum usuario esta logado </Text> )}
    </View>
  );
}
