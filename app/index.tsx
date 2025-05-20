import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import BotaoPersonalizado from '../components/BotaoPersonalizado';
import Cabecalho from '../components/Cabecalho';
import SecaoTitulo from '../components/SecaoTitulo';

export default function BotoesExemploApp() {
  // Funções que lidam com as ações dos botões
  function mostrarAlerta(mensagem: string) {
    alert(mensagem);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho 
        titulo="Exemplos de Botões" 
        subtitulo="Demonstração de diferentes estilos" 
      />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.secao}>
          <SecaoTitulo titulo="Botões por Cor" />
          
          <BotaoPersonalizado 
            titulo="Botão Primário" 
            tipo="primario" 
            onPress={() => mostrarAlerta('Botão Primário foi clicado!')}
          />
          
          <BotaoPersonalizado 
            titulo="Botão Secundário" 
            tipo="secundario" 
            onPress={() => mostrarAlerta('Botão Secundário foi clicado!')}
          />
          
          <BotaoPersonalizado 
            titulo="Botão de Sucesso" 
            tipo="sucesso" 
            onPress={() => mostrarAlerta('Operação realizada com sucesso!')}
          />
          
          <BotaoPersonalizado 
            titulo="Botão de Perigo" 
            tipo="perigo" 
            onPress={() => mostrarAlerta('Atenção! Ação irreversível!')}
          />
        </View>
        
        <View style={styles.secao}>
          <SecaoTitulo titulo="Botões por Estilo" />
          
          <BotaoPersonalizado 
            titulo="Botão Outline" 
            tipo="outline" 
            onPress={() => mostrarAlerta('Botão com estilo outline foi clicado!')}
          />
          
          <BotaoPersonalizado 
            titulo="Botão Arredondado" 
            tipo="primario" 
            arredondado={true}
            onPress={() => mostrarAlerta('Botão arredondado foi clicado!')}
          />
          
          <BotaoPersonalizado 
            titulo="Botão com Ícone" 
            tipo="secundario" 
            icone="✉️"
            onPress={() => mostrarAlerta('Você clicou no botão com ícone!')}
          />
        </View>
        
        <View style={styles.secao}>
          <SecaoTitulo titulo="Botões por Tamanho" />
          
          <BotaoPersonalizado 
            titulo="Botão Pequeno" 
            tipo="primario" 
            tamanho="pequeno"
            onPress={() => mostrarAlerta('Botão pequeno foi clicado!')}
          />
          
          <BotaoPersonalizado 
            titulo="Botão Normal" 
            tipo="primario" 
            onPress={() => mostrarAlerta('Botão normal foi clicado!')}
          />
          
          <BotaoPersonalizado 
            titulo="Botão Grande" 
            tipo="primario" 
            tamanho="grande"
            onPress={() => mostrarAlerta('Botão grande foi clicado!')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  scrollView: {
    flex: 1,
  },
  secao: {
    marginBottom: 25,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});