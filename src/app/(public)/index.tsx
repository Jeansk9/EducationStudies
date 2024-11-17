import { Button } from "@/Components/Button";
import { View, Text, StyleSheet, Image } from "react-native";

import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { useOAuth } from "@clerk/clerk-expo";

import * as Linking from "expo-linking";

WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const googleOAuth = useOAuth({
    strategy: "oauth_google",
  });

  async function onGoogleSignIn() {
    try {
      setIsLoading(true);
      const redirectUrl = Linking.createURL("/");
      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl });

      if (oAuthFlow.authSessionResult?.type === "success")
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        } else {
          setIsLoading(false);
        }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  return (
    <View style={styles.container}>
       <Image
        source={require('../../assets/backgroun.jpg')} // Substitua pelo caminho correto da sua imagem
        width={50}
        height={100}
      />
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Faça login para acessar o app</Text>
      <Button
        title="Entrar com Google"
        icon="logo-google"
        onPress={onGoogleSignIn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60, // Para deixar a imagem redonda
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
});
