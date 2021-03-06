import React from 'react';

import { StyleSheet, View, Text, TextInput } from 'react-native';
import TimerButton from './TimerButton';

export default function TimerForm({ id, title, project }) {
    const submitText = id ? 'Oppdater' : 'Opprett';
    return (
        <View style={styles.formContainer}>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Navn</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        defaultValue={title}
                    />
                </View>
            </View>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Kategori</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        defaultValue={project}
                    />
                </View>
            </View>
            <View style={styles.buttonGroup}>
                <TimerButton small color="#21BA45" title={submitText} />
                <TimerButton small color="#DB2828" title="Avbryt" />
            </View>
        </View>
    );
}
       
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f7f7f7',
        borderColor: '#353748',
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        borderColor: '#353748',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});