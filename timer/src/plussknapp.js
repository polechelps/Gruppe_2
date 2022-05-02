import React from 'react';
import { StyleSheet, View } from 'react-native';
import Knapp from './knapp'

export default function Plussknapp() {
    return (
        <View style={[styles.container, styles.buttonPadding]}>
            <Knapp title="+" color="#353748" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        borderColor: "#353748",
    },
    buttonPadding: {
        paddingHorizontal: 20,
        
    },
});