
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from '@/Components/Header';
import { useUser, useAuth } from '@clerk/clerk-expo';
import VideoListScreen from './youtubeVideos';

export default function PublicScreen() {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Header
        name={`${user?.firstName} ${user?.lastName}`}
        photo={user?.imageUrl || ''}
        signOut={signOut}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Explore e Domine Novas Habilidades!</Text>
        <Text style={styles.subtitle}>Com vídeos feitos para você aprender no seu ritmo.</Text>

        <Text style={styles.description}>
          - Acesse vídeos educativos de alta qualidade.
          - Nunca é tarde para aprender.
        </Text>

        <Text style={styles.callToAction}>Comece sua jornada de aprendizado hoje mesmo! </Text>
      </View>

     <View style={{flex: 2 , padding: 10}}>
     <VideoListScreen />

     </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "blue",
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#666', // Cor neutra para descrição
    lineHeight: 22, // Altura de linha para facilitar a leitura
    textAlign: 'center', // Centralizado
    marginBottom: 30, // Espaço abaixo do texto
  },
  callToAction: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff', // Azul para chamar atenção
    textAlign: 'center', // Centralizado
    marginTop: 10, // Espaço acima da chamada para ação
  },
});
