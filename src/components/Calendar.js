import React from 'react'
import CalendarDay from './CalendarDay'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import moment from 'moment';

const Calendar = props => {

    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const inicializaMatrizDeDias = () => {
        let matrix = new Array(5);
        for (let i = 0; i < 5; i++) {
            matrix[i] = new Array(7).fill(0);
        }
        let iterador = moment(new Date()).startOf('month');
        let dataInicial = moment();

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 7; j++) {
                if (iterador.toDate().getDay() === j && iterador.isSame(dataInicial, 'month')) {
                    matrix[i][j] = iterador.date();
                    iterador.add(1, 'day');
                } else {
                    matrix[i][j] = 0;
                }
            }
        }
        return matrix;
    };

    let [matrizMes, setMatrizMes] = React.useState([[], []]);

    React.useEffect(() => {
        setMatrizMes(inicializaMatrizDeDias());
        setMonthDays(daysArray);
    }, [props]);

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
            <View style={styles.calendar}>
                {/** Como vai funcionar:
                 *    D   S   T   Q   Q   S   S (FEITO)
                 *        1   2   3   4   5   6
                 *    7   8   9  10  11  12  13
                 *   15  16  17  18  19  20  21
                 *   22  23  24  25  26  27  28
                 *   29 30
                 */}
                 {matrizMes.map(semana => {
                     return (
                        <View style={styles.week}>
                            {
                                semana.map(day => {
                                    if (day === 0) {
                                        return (
                                            <View />
                                        );
                                    } else {
                                        return (
                                            <View style={ styles.day }>
                                                <Text>{day}</Text>
                                            </View>
                                        );
                                    }
                                })
                            }
                        </View>
                     );
                 })}
            </View>
        </View>
    )
}

export default Calendar

const styles = StyleSheet.create({
    diasDaSemanaContainer: {
        flexDirection: 'row',
    },
    week: {
        flexDirection: 'row',
    },
    calendar: {
        flexDirection: 'column',
    },
    day: {},
});
