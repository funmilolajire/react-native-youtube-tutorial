import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue',
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
    },
});

Header.defaultProps = {
    title: 'Default Title'
}

export default Header;