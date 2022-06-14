import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from "./styles";

export default function Owasp10top() {
  return (
    <View style={styles.box}>
      
      <Text style={styles.paragraph}>
      A01: 2021-Quebra de Controle de acesso: </ Text> 
      <Text> Subiu da quinta par a primeira posição; 94% das aplicações foram testadas para alguma forma de comprometimento do controle de acesso. Os 34 CWEs mapeados para Quebra de Controle de Acesso tiveram mais ocorrências em aplicativos do que qualquer outra categoria.{"\n"}{"\n"}</Text>

      <Text style={styles.paragraph}>
      A02: 2021-Falhas criptográficas: </Text>
      <Text> sobe uma posição para o nº 2, anteriormente conhecido como Exposição de dados confidenciais, que era um sintoma amplo, e não uma causa raiz. O foco aqui está nas falhas relacionadas à criptografia, que geralmente levam à exposição de dados confidenciais ou comprometimento do sistema.{"\n"}{"\n"}</Text>
      
      <Text style={styles.paragraph}>
      A03: 2021-Injeção: </Text> <Text> desce para a terceira posição. 94% das aplicações foram testados para alguma forma de injeção, e os 33 CWEs mapeados nesta categoria têm o segundo maior número de ocorrênciass. Cross-site Scripting agora faz parte desta categoria nesta edição.{"\n"}{"\n"}</Text>

      <Text style={styles.paragraph}>
      A04: 2021-Design inseguro: </Text> <Text> é uma nova categoria para 2021, com foco nos riscos relacionados a falhas de design. Se quisermos genuinamente “ir para a esquerda”, isso exige mais uso de modelagem de ameaças, padrões e princípios de design seguro e arquiteturas de referência. {"\n"}{"\n"}</Text>

      <Text style={styles.paragraph}>
      A05: 2021-Configuração incorreta de segurança: </Text> 
      <Text>Subiu uma posição em relação a edição anterior; 90% dos aplicativos foram testados para algum tipo de configuração incorreta. Com mais mudanças em softwares altamente configuráveis, não é surpreendente ver essa categoria subir. XML External Entities (XXE) agora faz parte desta categoria.{"\n"}{"\n"}</Text>

      <Text style={styles.paragraph}>
      A06: 2021-Componentes vulneráveis ​​e desatualizados: </Text>
      <Text>era anteriormente intitulado “Usando componentes com vulnerabilidades conhecidas” e é o número 2 na pesquisa do setor, mas também tinha dados suficientes para chegar aos 10 principais por meio de análise de dados. Esta categoria passou da 9ª posição em 2017 e é um problema conhecido que temos dificuldade em testar e avaliar o risco. É a única categoria que não possui CVEs mapeados para os CWEs incluídos, portanto, uma exploração padrão e pesos de impacto de 5,0 são considerados em suas pontuações.{"\n"}{"\n"}</Text>

      <Text style={styles.paragraph}>
      A07: 2021-Quebra de identificação e autenticação: </ Text> <Text>anteriormente definida como “Quebra de autenticação”, desceu da segunda para a sétima posição e agora inclui CWEs que estão relacionados a falhas de identificação. Essa categoria ainda é parte integrante do Top 10, mas a maior disponibilidade de estruturas padronizadas parece estar ajudando.{"\n"}{"\n"}</Text>

      <Text style={styles.paragraph}>
      A08: 2021-Falhas de software e integridade de dados: </ Text> <Text>é uma nova categoria para 2021, com foco em fazer suposições relacionadas a atualizações de software, dados críticos e pipelines de CI / CD sem verificar a integridade. Um dos maiores impactos ponderados dos dados CVE / CVSS mapeados para os 10 CWEs nesta categoria. A “desserialização insegura” de 2017 agora faz parte dessa categoria maior.{"\n"}{"\n"}</Text>

      <Text style={styles.paragraph}>
      A09: 2021 – Falhas de registro e monitoramento de segurança: </ Text> <Text>anteriormente definida como “Registro e monitoramento insuficientes”, esta categoria foi expandida para incluir mais tipos de falhas. É um desafio para testar e não está bem representada nos dados CVE / CVSS. No entanto, as falhas nesta categoria podem impactar diretamente a visibilidade, o alerta de incidentes e a perícia.{"\n"}{"\n"}</Text>
      
      <Text style={styles.paragraph}>
      A10: 2021-Server-Side Request Forgery:</Text>
      <Text> Os dados mostram uma taxa de incidência relativamente baixa com cobertura de teste acima da média, junto com classificações acima da média para potencial de exploração e impacto. Essa categoria representa o cenário em que os profissionais da indústria estão nos dizendo que isso é importante, embora não esteja ilustrado nos dados neste momento.{"\n"}{"\n"}</Text>


    </View>
  );
}

