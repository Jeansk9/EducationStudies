import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    isLoading?: boolean;
    icon?: keyof typeof Ionicons.glyphMap;
}

export function Button({ title, isLoading = false, icon, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} {...rest} disabled={isLoading} activeOpacity={0.8}>
           
            {isLoading ? (
                <ActivityIndicator  size="small" color="white" />
            ) : (
               <>
                 <Ionicons style={styles.icon} name={icon} />
                <Text style={styles.text}>{title}</Text>
               </>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 22,
      
        backgroundColor: '#111',
        borderRadius: 16,
        gap: 7,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 8,
        fontSize: 24,
        color: 'white',


    },
});
