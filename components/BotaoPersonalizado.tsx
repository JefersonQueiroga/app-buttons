// components/BotaoPersonalizado.tsx (Versão Simplificada)
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type TipoBotao = 'primario' | 'secundario' | 'sucesso' | 'perigo' | 'outline';
type TamanhoBotao = 'pequeno' | 'normal' | 'grande';

interface BotaoProps {
  titulo: string;
  tipo: TipoBotao;
  tamanho?: TamanhoBotao;
  arredondado?: boolean;
  icone?: string;
  onPress: () => void;
}

function BotaoPersonalizado(props: BotaoProps) {
  // Definir estilo do botão com base no tipo
  const estiloTipo = {
    primario: styles.botaoPrimario,
    secundario: styles.botaoSecundario,
    sucesso: styles.botaoSucesso,
    perigo: styles.botaoPerigo,
    outline: styles.botaoOutline
  };

  // Definir estilo do texto com base no tipo
  const estiloTextoTipo = {
    primario: styles.botaoTexto,
    secundario: styles.botaoTexto,
    sucesso: styles.botaoTexto,
    perigo: styles.botaoTexto,
    outline: styles.botaoOutlineTexto
  };

  // Definir estilo com base no tamanho
  const estiloTamanho = {
    pequeno: styles.botaoPequeno,
    normal: {},
    grande: styles.botaoGrande
  };

  // Definir estilo do texto com base no tamanho
  const estiloTextoTamanho = {
    pequeno: styles.botaoTextoPequeno,
    normal: {},
    grande: styles.botaoTextoGrande
  };

  return (
    <TouchableOpacity 
      style={[
        styles.botao, 
        estiloTipo[props.tipo],
        estiloTamanho[props.tamanho || 'normal'],
        props.arredondado && styles.botaoArredondado
      ]} 
      onPress={props.onPress}
    >
      <Text style={[
        styles.botaoTexto,
        estiloTextoTipo[props.tipo],
        estiloTextoTamanho[props.tamanho || 'normal']
      ]}>
        {props.icone ? `${props.icone} ${props.titulo}` : props.titulo}
      </Text>
    </TouchableOpacity>
  );
}

// Definindo valores padrão para props opcionais
BotaoPersonalizado.defaultProps = {
  tamanho: 'normal',
  arredondado: false,
};

const styles = StyleSheet.create({
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
    backgroundColor: '#007BFF',  // Azul
  },
  botaoSecundario: {
    backgroundColor: '#6C757D',  // Cinza escuro
  },
  botaoSucesso: {
    backgroundColor: '#28A745',  // Verde
  },
  botaoPerigo: {
    backgroundColor: '#DC3545',  // Vermelho
  },
  botaoOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  botaoArredondado: {
    borderRadius: 25,
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
  },
  botaoTextoPequeno: {
    fontSize: 14,
  },
  botaoTextoGrande: {
    fontSize: 18,
  },
});

export default BotaoPersonalizado;