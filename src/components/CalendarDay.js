import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types';

const CalendarDay = props => {
    return (
        <View>
            {/* TODO: Parte do dia do calendário aqui, INCOMPLETO */}
            <Text>{props.item.key}</Text>
        </View>
    )
}

CalendarDay.propTypes = {
    dia: PropTypes.string,
    date: PropTypes.any,
}

export default CalendarDay;

const styles = StyleSheet.create({})
