import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import YouTube from 'react-native-youtube-iframe';

// Lista de vídeos educativos com título e IDs do YouTube

const videos = [
  { id: '1', title: 'Andragogia: A Ciência do Aprendizado para Adultos', videoId: 'R8-B6BogMkk' },
  { id: '2', title: 'Aprendizagem de Adultos: Princípios e Métodos', videoId: 'lMDwbJsAloQ' },
  { id: '3', title: 'Os Seis Princípios Fundamentais da Aprendizagem de Adultos', videoId: 'uedwcNqOL1A' },
  { id: '4', title: 'Como os Adultos Aprendem Melhor - Técnicas Práticas', videoId: '5MgBikgcWnY' },
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
    color: 'blue',
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
