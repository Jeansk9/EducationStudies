import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "@/Components/Button";
import { useUser, useAuth } from "@clerk/clerk-expo";

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{ uri: user?.imageUrl }}
        resizeMode="cover"
      />
      <Text style={styles.userName}>{user?.firstName} {user?.lastName}</Text>
      <Text style={styles.userEmail}>{user?.emailAddresses[0]?.emailAddress}</Text>

      <Button
        title="Sair"
        icon="exit"
        onPress={() => {
          signOut();
        }}
        style={styles.logoutButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
  },
});
