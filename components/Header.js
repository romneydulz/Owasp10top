import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.box}>
      
      <Text style={styles.paragraph}>
        Faculdades Integradas Campos Salles{"\n"}
        Sistemas de Informação{"\n"}{"\n"}
        OWASP Top 10 2021{"\n"}
      </Text>
      <Image style={styles.img} source={require('../assets/owasp.png')} />
      <Text style={styles.paragraph}>
        Romney de Matos Dulz - 7º semestre{"\n"}
        Lucas Cassiano dos Santos - 6º semestre
        {"\n"}
               07/06/2022
      </Text>
    </View>
  );
}


