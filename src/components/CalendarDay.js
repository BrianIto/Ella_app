import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types';
import moment from "moment";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome5";
const CalendarDay = props => {

    const [interactions, setInteractions] = React.useState([]);

    const checkIfInteractionsIsThisDay = () => {
        if (props.userLogged) {
            props.userLogged.interacoes.forEach(interacao => {
                if (moment(interacao.data.seconds * 1000).utc().isSame(props.date.day, 'day')) {
                    setInteractions([...interactions, interacao]);
                }
            });
        }
    };

    const renderIcon = (interacao) => {
        switch (interacao) {
            case 'sexo':
                return (<Icon style={{alignSelf: 'center'}} size={10} name={'heart'} color={'#f33'} />);
            case '':
                return
            default:
                return <></>
        }
    }

    React.useEffect(() => {
        checkIfInteractionsIsThisDay();
    }, []);

    return (
        <TouchableOpacity onPress={() => props.onTouchDay(props.date.day)} style={styles.container}>
            <Text style={[styles.text, props.date.hoje ? styles.today : {}]}>{props.date.dia}</Text>
            {
                interactions.map(interacao => (
                    <View>
                        <Text style={[styles.text]}>{interacao.interacao}</Text>
                        {renderIcon(interacao.interacao)}
                    </View>
                ))
            }
        </TouchableOpacity>
    )
}

CalendarDay.propTypes = {
    dia: PropTypes.string,
    date: PropTypes.any,
}

const mapStateToProps = state => ({
    userLogged: state.general.userLogged,
});

export default connect(mapStateToProps)(CalendarDay);

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
