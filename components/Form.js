import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Picker,
  TextInput,
  TouchableOpacity
  } from 'react-native';

  //import Slider from '@react-native-community/slider';
  
  export default class Form extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        {sexoNome: 'Masculino', valor: 1},
        {sexoNome: 'Feminino', valor: 2},
      ],
      cidades: [
        {cidadeNome: 'São Paulo', valor: 1},
        {cidadeNome: 'Rio de Janeiro', valor: 2},
      ],
      limite: 1000,
      estudante: false,
    };

    this.enviarDados = this.enviarDados.bind(this);

  }

  //Metodo que é chamado quando você clica no botao Abrir Conta
  enviarDados(){

  if(this.state.nome === '' || this.state.idade === ''){
      alert('Todos os dados são obrigatorios!')
      return;
    }

    alert(
      'Conta aberta com sucesso!! \n\n' + 
      'Nome: '+this.state.nome + '\n' + 
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: '+ this.state.sexos[this.state.sexo].sexoNome + ' \n' +
      'Cidade: '+ this.state.cidades[this.state.cidade].cidadeNome + ' \n' +
      'Limite Conta: ' + this.state.limite.toFixed(2) + '\n' +
      'Conta Estudante: ' + ((this.state.estudante)? 'Ativo' : 'Inativo')
      );
  
  }


  render(){

    return(
	  
      <View style={styles.container}>
      <Text style={styles.Logo}>Login</Text>
      <View style={styles.areaFormulario}>

      <View>
        <Text style={styles.textoNome}>Usuário:</Text>
        <TextInput style={styles.input}
            placeholder="Informe seu usuario"
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({nome: texto})}
            
        />

        <Text style={styles.textoNome}>Senha:</Text>
        <TextInput secureTextEntry={true} style={styles.input}
            
            placeholder="Informe sua senha"
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({idade: texto})}
        />
     </View>
              
        <TouchableOpacity style={styles.botao} underlayColor="#000000">
            <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>
  
      </View>
      </View>    
    );

  }

}

const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    flex: 1,
  },
  areaFormulario:{
    flexDirection: 'column',
    margin: 10,
  },
  Logo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000'
  },
  textoNome:{
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  input:{
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    height: 38,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
  }, 
  limiteArea:{
    flexDirection:'row',
    paddingBottom: 5,
},
limiteTexto:{
  color: '#FF0000',
  fontSize: 17,
  fontWeight: 'bold',
  paddingLeft: 5,
},
botao:{
 height: 35,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#000000',
 borderRadius: 150,
 margin: 20
},
botaoTexto:{
   fontSize: 20,
   fontWeight: 'bold',
   color: '#FFFFFF'
},

});


