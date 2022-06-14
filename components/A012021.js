import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from "./styles";

export default function A012021() {
  return (
    <View style={styles.box}>
      
      <Text style={styles.paragraph}>
      Visão geral </ Text> 
      <Text> Subindo da quinta posição, 94% dos aplicativos foram testados para alguma forma de controle de acesso quebrado com taxa média de incidência de 3,81%, e tem o maior número de ocorrências no conjunto de dados contribuído com mais de 318k. As Enumerações de Fraquezas Comuns (CWEs) notáveis ​​incluídas são CWE-200: Exposição de informações confidenciais a um agente não autorizado , CWE-201: Inserção de informações confidenciais em dados enviados e CWE-352: falsificação de solicitação entre sites .{"\n"}{"\n"}</Text>

      <Text style={styles.paragraph}>
      Descrição </Text>
      <Text> O controle de acesso impõe a política de forma que os usuários não possam agir fora de suas permissões pretendidas. As falhas geralmente levam à divulgação, modificação ou destruição de informações não autorizadas de todos os dados ou à execução de uma função comercial fora dos limites do usuário. Vulnerabilidades comuns de controle de acesso incluem:{"\n"}{"\n"}</Text>
       <Text> Violação do princípio de privilégio mínimo ou negação por padrão, onde o acesso deve ser concedido apenas para recursos, funções ou usuários específicos, mas está disponível para qualquer pessoa.{"\n"}{"\n"}</Text>
       <Text> Ignorando as verificações de controle de acesso modificando a URL (alteração de parâmetro ou navegação forçada), o estado interno do aplicativo ou a página HTML, ou usando uma ferramenta de ataque modificando solicitações de API.   {"\n"}{"\n"}</Text>
       <Text> Permitir a visualização ou edição da conta de outra pessoa, fornecendo seu identificador exclusivo (referências de objetos diretos inseguros)   {"\n"}{"\n"}</Text>
       <Text>Acessando API com controles de acesso ausentes para POST, PUT e DELETE.    {"\n"}{"\n"}</Text>
       <Text> Elevação de privilégio. Atuar como usuário sem estar conectado ou atuar como administrador quando estiver conectado como usuário.   {"\n"}{"\n"}</Text>
       <Text>  Manipulação de metadados, como reproduzir ou adulterar um token de controle de acesso JSON Web Token (JWT), ou um cookie ou campo oculto manipulado para elevar privilégios ou abusar da invalidação de JWT.  {"\n"}{"\n"}</Text>
       <Text> A configuração incorreta do CORS permite o acesso à API de origens não autorizadas/não confiáveis.   {"\n"}{"\n"}</Text>
       <Text>  Força a navegação em páginas autenticadas como usuário não autenticado ou em páginas privilegiadas como usuário padrão.  {"\n"}{"\n"}</Text>

      <Text style={styles.paragraph}>
      Como prevenir </Text> <Text> O controle de acesso só é eficaz em código do lado do servidor confiável ou API sem servidor, em que o invasor não pode modificar a verificação ou os metadados do controle de acesso. {"\n"}{"\n"}</Text>
      <Text> Exceto para recursos públicos, negar por padrão. {"\n"}{"\n"}</Text>
      <Text> Implemente mecanismos de controle de acesso uma vez e reutilize-os em todo o aplicativo, inclusive minimizando o uso do Cross-Origin Resource Sharing (CORS). {"\n"}{"\n"}</Text>
      <Text> Os controles de acesso do modelo devem impor a propriedade do registro em vez de aceitar que o usuário possa criar, ler, atualizar ou excluir qualquer registro. {"\n"}{"\n"}</Text>
      <Text> Os requisitos exclusivos de limite de negócios do aplicativo devem ser impostos por modelos de domínio. {"\n"}{"\n"}</Text>
      <Text> Desative a listagem de diretórios do servidor web e certifique-se de que os metadados do arquivo (por exemplo, .git) e os arquivos de backup não estejam presentes nas raízes da web. {"\n"}{"\n"}</Text>
      <Text> Registre falhas de controle de acesso, alerte os administradores quando apropriado (por exemplo, falhas repetidas). {"\n"}{"\n"}</Text>
      <Text> Taxa de limite de acesso à API e ao controlador para minimizar os danos das ferramentas de ataque automatizadas. {"\n"}{"\n"}</Text>
      <Text> Os identificadores de sessão com estado devem ser invalidados no servidor após o logout. Os tokens JWT sem estado devem ser de curta duração para que a janela de oportunidade para um invasor seja minimizada. Para JWTs de vida mais longa, é altamente recomendável seguir os padrões OAuth para revogar o acesso. {"\n"}{"\n"}</Text>


    </View>
  );
}

