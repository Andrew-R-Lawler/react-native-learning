import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const myName = <Text style={styles.nameStyle}>My name is Andrew</Text>

    return (
    <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        {myName}
    </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;