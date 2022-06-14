import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, TextInput, Button} from 'react-native';
import firebase from './firebaseCon';
import { styles } from "./styles";

export default function Cadastro() {
	
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [telefone, setTelefone] = useState('');

	async function cadastrar(){
		if(nome !== '' & email !== ''){
			let usuarios = await firebase.database().ref('AlunoDmD');
			let chave = usuarios.push().key;
			usuarios.child(chave).set({
			nome: nome,
			email: email,
			telefone: telefone
			});
			
			alert('Cadastrado com sucesso!');
			setEmail('');
			setNome('');
			setTelefone('');
			}
	}
	

	return (

<View style={styles.box}>

	<Text style={styles.paragraph}>Nome</Text>
	<TextInput
		style={styles.input}
		underlineColorAndroid="transparent"
		onChangeText={(texto) => setNome(texto) }
		value={nome}
	/>

	<Text style={styles.paragraph}>E-mail</Text>
		<TextInput
			style={styles.input}
			underlineColorAndroid="transparent"
			onChangeText={(texto) => setEmail(texto) }
			value={email} />

	<Text style={styles.paragraph}>Telefone</Text>
	<TextInput
	style={styles.input}
	underlineColorAndroid="transparent"
	onChangeText={(texto) => setTelefone(texto) }
	value={telefone}
	/>
	<Pressable onPress={cadastrar} style={styles.btn} type="submit">
		<Text style={styles.tbtn}>Novo Cadastro</Text>
	</Pressable>

</View>

);
}