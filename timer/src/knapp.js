import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Knapp({
    color,
    title,
    small,
    onPress,
}) {
    return (
        <TouchableOpacity
            style={[styles.button, { borderColor: color }]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.buttonText,
                    small ? styles.small : styles.large,
                    { color },
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        minWidth: 100,
        borderWidth: 2,
        borderRadius: 15,
    },
    small: {
        fontSize: 15,
        padding: 5,
    },
    large: {
        fontSize: 20,
        padding: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    elapsedTime: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    },
});