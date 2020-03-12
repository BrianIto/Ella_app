import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment';

const Calendar = props => {

    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [monthDays, setMonthDays] = React.useState([]);

    React.useEffect(() => {
        //Popula o Array monthDays com os dias do mês atual
        let daysArray = [];
        let day = moment(new Date()).startOf('month');
        while (day.isSame(new Date(), 'month')) {
            daysArray.push(day.add(1, 'day'));
        }
        setMonthDays(daysArray);
    });

    return (
        <View>
            {/* Cabeçalho do Calendário*/}
            <View style={styles.diasDaSemanaContainer}>
                {weekDays.map(day => (
                    <View>
                        <Text>{day}</Text>
                    </View>
                ))}
            </View>
            {/* Parte real do Calendário */}
            {
                //TODO: Parte real do calendário aqui.
            }
        </View>
    )
}

export default Calendar

const styles = StyleSheet.create({
    diasDaSemanaContainer: {
        flexDirection: 'row',
    }
})
