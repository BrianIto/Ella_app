import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'

const InputText = props => {
    return (
        <View style={props.style}>
            <Text style={ styles.label }>{props.label}</Text>
            <TextInput
                style={ styles.input }
                value={props.defaultValue}
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}/>
        </View>
    )
}

InputText.propTypes = {
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
};

export default InputText;

const styles = StyleSheet.create({
    label: {
        marginTop: 5,
        color: "#333",
    },
    input: {
        borderBottomColor: '#777',
        borderBottomWidth: 1,
    }
})
