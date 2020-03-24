import React from 'react'
import CalendarDay from './CalendarDay'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import moment from 'moment/min/moment-with-locales';

const Calendar = props => {

    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [mes, setMes] = React.useState(moment(new Date()));

    const inicializaMatrizDeDias = mes => {
        let matrix = new Array(5);
        for (let i = 0; i < 5; i++) {
            matrix[i] = new Array(7).fill(0);
        }
        let iterador = moment(new Date()).startOf('month');
        let dataInicial = moment();

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 7; j++) {
                if (iterador.toDate().getDay() === j && iterador.isSame(dataInicial, 'month')) {
                    matrix[i][j] = {day: moment(iterador.toDate()), dia: iterador.date(), hoje: iterador.isSame(new Date(), 'day')};
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
        setMes(moment(new Date()));
        setMatrizMes(inicializaMatrizDeDias(mes));
    }, [props]);

    return (
        <View>
            <Text style={styles.h2}>{mes.locale('pt-BR').format('MMMM')}</Text>
            {/* Cabeçalho do Calendário*/}
            <View style={styles.diasDaSemanaContainer}>
                {weekDays.map(day => (
                    <View style={[styles.day, styles.bold]}>
                        <Text style={styles.text}>{day}</Text>
                    </View>
                ))}
            </View>
            {/* Parte real do Calendário */}
            <View style={styles.calendar}>
                 {matrizMes.map(semana => {
                     return (
                        <View style={styles.week}>
                            <Text>{}</Text>
                            {
                                semana.map(day => {
                                    if (day === 0) {
                                        return (
                                            <View style={styles.day}/>
                                        );
                                    } else {
                                        return (
                                                <CalendarDay onTouchDay={props.onTouchDay} date={day}/>
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
    day: {
        color: '#000',
        flex: 1,
        height: 30,
    },
    hoje: {
        color: "#FC00CC",
    },
    text: {
        textAlign: 'center',
        color: '#333',
    },
    bold: {
        fontWeight: "bold",
    },
    h2: {
        marginTop: 15,
        textAlign: 'center',
        marginBottom: 25,
        fontSize: 30,
        color: '#333',
    }
});

export default Calendar


