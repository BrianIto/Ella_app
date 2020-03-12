import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';

const Button = () => {
    return (
        <TouchableOpacity>
            <Text>{props.children}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({})
