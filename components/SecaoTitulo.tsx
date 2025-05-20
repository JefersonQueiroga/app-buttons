// components/SecaoTitulo.tsx
import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface SecaoTituloProps {
  titulo: string;
}

function SecaoTitulo(props: SecaoTituloProps) {
  return (
    <Text style={styles.secaoTitulo}>{props.titulo}</Text>
  );
}

const styles = StyleSheet.create({
  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
});

export default SecaoTitulo;