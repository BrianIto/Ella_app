import React from 'react'
import { StyleSheet, Text, View, InputText } from 'react-native'
import PropTypes from 'prop-types'

const InputText = props => {
    return (
        <View>
            <Text>{props.label}</Text>
            <InputText
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

const styles = StyleSheet.create({})