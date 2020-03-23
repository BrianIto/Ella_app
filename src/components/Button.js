import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';

const Button = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.button}>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    onPress: PropTypes.func,
};

export default Button;

const styles = StyleSheet.create({
    button: {
        marginTop: 25,
        borderRadius: 5,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: "#FC00CC",
    },
    text: {
        textAlign: 'center',
    }
})
