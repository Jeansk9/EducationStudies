import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface HeaderProps extends TouchableOpacityProps {
  name: string;
  photo: string;
  signOut: () => void;
}

export function Header({ name, photo, signOut }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{ uri: photo }}
        resizeMode="cover"
      />
      <Text style={styles.userName}>{name}</Text>
      <TouchableOpacity onPress={signOut} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
  },
  logoutButton: {
    backgroundColor: '#ff4757',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
