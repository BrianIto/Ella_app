import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import moment from "moment";

const CalendarDay = props => {

    const onPress = () => alert(moment(props.date.day).format('DD/MM/YYYY'));

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={[styles.text, props.date.hoje ? styles.today : {}]}>{props.date.dia}</Text>
        </TouchableOpacity>
    )
}

CalendarDay.propTypes = {
    dia: PropTypes.string,
    date: PropTypes.any,
}

export default CalendarDay;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#CCC',
        flex: 1,
        marginVertical: 5,
        paddingVertical: 15,
    },
    text: {
        textAlign: 'center',
        color: '#000',
    },
    today: {
        color: "#FC00CC",
    }
})
