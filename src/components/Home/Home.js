import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá! nossa página de cadastro está passando por divergências devido a instabilidade do SENAI, aguarde atualizações, enquanto isso tente entrar em contato pelo nosso e-mail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27282D',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
