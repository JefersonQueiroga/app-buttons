// components/Cabecalho.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CabecalhoProps {
  titulo: string;
  subtitulo?: string;
}

function Cabecalho(props: CabecalhoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{props.titulo}</Text>
      {props.subtitulo && <Text style={styles.subtitulo}>{props.subtitulo}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

export default Cabecalho;