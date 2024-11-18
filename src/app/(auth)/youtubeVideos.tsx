import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import YouTube from 'react-native-youtube-iframe';

// Lista de vídeos educativos com título e IDs do YouTube
const videos = [
  { id: '1', title: 'Aprendendo o Alfabeto do Zero', videoId: 'VbvVC8_Rp54' },
  { id: '2', title: 'Formação de Palavras Simples', videoId: 'FxV4GMcb1HI' },
  { id: '3', title: 'Como Ler Sílabas Básicas', videoId: 'eQ_mptGOHW8' },
  { id: '4', title: 'Escrita e Leitura para Adultos Iniciantes', videoId: 'Qy8oU5r6GQI' },
  { id: '5', title: 'Lições Básicas de Português', videoId: 'wKLnFwhci38' },
  { id: '6', title: 'Lendo Palavras do Cotidiano', videoId: 'vUeHBG9w-LM' },
  { id: '7', title: 'Como Escrever seu Nome e Endereço', videoId: 'ktnMLOPyHo8' },
  { id: '8', title: 'Aprendendo Números e Letras', videoId: 'GbWR4RTfg5s' },
  { id: '9', title: 'Reconhecendo Sons das Letras', videoId: 'A5_hyvhCsAQ' },
  { id: '10', title: 'Ler e Escrever com Confiança', videoId: 'UyzWLqaLvWA' },
];


export default function VideoListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bem-vindo ao Aprendizado!</Text>
      <Text style={styles.subheader}>Explore nossos vídeos educativos abaixo:</Text>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.videoContainer}>
            <Text style={styles.videoTitle}>{item.title}</Text>
            <YouTube
             height={200}
             width={300} // Largura explícita
             videoId={item.videoId} // ID do vídeo do YouTube
             play={false} // Vídeo começa pausado
             onChangeState={(state) => console.log('Estado do vídeo:', state)}
             onError={(e) => console.error('Erro no vídeo:', e)} // Depuração
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  subheader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  videoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
    color: '#444',
  },
});
