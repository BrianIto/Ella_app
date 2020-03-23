import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'

const InputText = props => {
    return (
        <View>
            <Text style={ styles.label }>{props.label}</Text>
            <TextInput
                style={ styles.input }
                onChange={props.onChange}
                placeholder={props.placeholder}/>
        </View>
    )
}

InputText.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string.isRequired,
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
