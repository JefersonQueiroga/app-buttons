import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BotoesExemploApp() {
  // Funções que lidam com as ações dos botões
  function mostrarAlertaPrimario() {
    console.log('Botão Primário Pressionado');
    alert('Botão Primário foi clicado!');
  }

  function mostrarAlertaSecundario() {
    console.log('Botão Secundário Pressionado');
    alert('Botão Secundário foi clicado!');
  }

  function mostrarAlertaSucesso() {
    console.log('Botão de Sucesso Pressionado');
    alert('Operação realizada com sucesso!');
  }

  function mostrarAlertaPerigo() {
    console.log('Botão de Perigo Pressionado');
    alert('Atenção! Ação irreversível!');
  }

  function mostrarAlertaOutline() {
    console.log('Botão Outline Pressionado');
    alert('Botão com estilo outline foi clicado!');
  }

  function mostrarAlertaArredondado() {
    console.log('Botão Arredondado Pressionado');
    alert('Botão arredondado foi clicado!');
  }

  function mostrarAlertaIcone() {
    console.log('Botão com Ícone Pressionado');
    alert('Você clicou no botão com ícone!');
  }

  function mostrarAlertaPequeno() {
    console.log('Botão Pequeno Pressionado');
    alert('Botão pequeno foi clicado!');
  }

  function mostrarAlertaGrande() {
    console.log('Botão Grande Pressionado');
    alert('Botão grande foi clicado!');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Exemplos de Botões</Text>
      <Text style={styles.subtitulo}>Demonstração de diferentes estilos</Text>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Botões por Cor</Text>
          
          {/* Botão Primário */}
          <TouchableOpacity 
            style={[styles.botao, styles.botaoPrimario]} 
            onPress={mostrarAlertaPrimario}
          >
            <Text style={styles.botaoTexto}>Botão Primário</Text>
          </TouchableOpacity>
          
          {/* Botão Secundário */}
          <TouchableOpacity 
            style={[styles.botao, styles.botaoSecundario]} 
            onPress={mostrarAlertaSecundario}
          >
            <Text style={styles.botaoTexto}>Botão Secundário</Text>
          </TouchableOpacity>
          
          {/* Botão de Sucesso */}
          <TouchableOpacity 
            style={[styles.botao, styles.botaoSucesso]} 
            onPress={mostrarAlertaSucesso}
          >
            <Text style={styles.botaoTexto}>Botão de Sucesso</Text>
          </TouchableOpacity>
          
          {/* Botão de Perigo */}
          <TouchableOpacity 
            style={[styles.botao, styles.botaoPerigo]} 
            onPress={mostrarAlertaPerigo}
          >
            <Text style={styles.botaoTexto}>Botão de Perigo</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Botões por Estilo</Text>
          
          {/* Botão Outline */}
          <TouchableOpacity 
            style={[styles.botao, styles.botaoOutline]} 
            onPress={mostrarAlertaOutline}
          >
            <Text style={styles.botaoOutlineTexto}>Botão Outline</Text>
          </TouchableOpacity>
          
          {/* Botão Arredondado */}
          <TouchableOpacity 
            style={[styles.botao, styles.botaoPrimario, styles.botaoArredondado]} 
            onPress={mostrarAlertaArredondado}
          >
            <Text style={styles.botaoTexto}>Botão Arredondado</Text>
          </TouchableOpacity>
          
          {/* Botão com Ícone (simulado com texto) */}
          <TouchableOpacity 
            style={[styles.botao, styles.botaoSecundario]} 
            onPress={mostrarAlertaIcone}
          >
            <Text style={styles.botaoTexto}>✉️ Botão com Ícone</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Botões por Tamanho</Text>
          
          {/* Botão Pequeno */}
          <TouchableOpacity 
            style={[styles.botao, styles.botaoPrimario, styles.botaoPequeno]} 
            onPress={mostrarAlertaPequeno}
          >
            <Text style={[styles.botaoTexto, styles.botaoTextoPequeno]}>Botão Pequeno</Text>
          </TouchableOpacity>
          
          {/* Botão Normal - já incluído acima */}
          
          {/* Botão Grande */}
          <TouchableOpacity 
            style={[styles.botao, styles.botaoPrimario, styles.botaoGrande]} 
            onPress={mostrarAlertaGrande}
          >
            <Text style={[styles.botaoTexto, styles.botaoTextoGrande]}>Botão Grande</Text>
          </TouchableOpacity>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 5,
    color: '#333',
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
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
  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  botao: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  botaoPrimario: {
    backgroundColor: '#007BFF',
  },
  botaoSecundario: {
    backgroundColor: '#6C757D',
  },
  botaoSucesso: {
    backgroundColor: '#28A745',
  },
  botaoPerigo: {
    backgroundColor: '#DC3545',
  },
  botaoOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  botaoArredondado: {
    borderRadius: 25,
  },
  botaoIcone: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botaoPequeno: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  botaoGrande: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  botaoOutlineTexto: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: '500',
  },
  botaoTextoPequeno: {
    fontSize: 14,
  },
  botaoTextoGrande: {
    fontSize: 18,
  },
});