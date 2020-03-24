import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Calendar from '../../components/Calendar';
import Button from '../../components/Button';
import BottomModal from "react-native-modals/dist/components/BottomModal";
import {connect} from "react-redux";
import InteracaoDAO from "../../DAOS/interacaoDAO";
import Actions from "../../redux/actions/actions";
import moment from "moment";
import UsuarioDAO from "../../DAOS/usuarioDAO";
import Icon from "react-native-vector-icons/FontAwesome5";
const Main = props => {

    const [modalOpen, setModalOpen] = React.useState(false);
    const eventos = [
        {
            icon: 'theater-masks',
            title: "Mudança de Humor",
            name:"mudancaHumor"
        },{
            icon: 'file',
            title: "Exame Preventivo",
            name:"examePreventivo"
        },{
            icon: 'heart',
            title: "Sexo",
            name:"sexo"
        }, {
            icon: 'file',
            title: "Exame de mama",
            name:"ExameMama"
        }];

    return (
        <View style={styles.container}>
            <BottomModal visible={modalOpen} height={0.6} onTouchOutside={() => setModalOpen(false)}>
                <View style={styles.container}>
                    <Text style={[styles.text, styles.modalTitle]}>Adicionar Evento - {moment(props.dateSelected).format('DD/MM')}</Text>
                    <Text style={[styles.text, styles.modalH2]}>Adicionar Sintomas</Text>
                    <View style={styles.interactions}>
                        {eventos.map(evento =>
                            (<TouchableOpacity onPress={async () => {
                                try {
                                    await InteracaoDAO.novaInteracaoDeUsuario(props.userLogged.id, {
                                        interacao: evento.name,
                                        data: props.daySelected.toDate(),
                                    });
                                    props.setUserLogged(await UsuarioDAO.login(props.userLogged.email, props.userLogged.senha));
                                    alert("Adicionado com sucesso");
                                } catch(e) {
                                    alert(e);
                                }
                            }} style={{flex: 1}}>
                                <Icon style={{alignSelf: 'center'}} color={'#000'} name={evento.icon} size={30}/>
                                <Text style={[styles.text, {textAlign: "center"}]}>{evento.title}</Text>
                            </TouchableOpacity>))}
                    </View>
                    <Button onPress={async () => {
                        try {
                            await InteracaoDAO.novaInteracaoDeUsuario(props.userLogged.id, {
                                interacao: 'inicioMenstruacao',
                                data: props.daySelected.toDate(),
                            });
                            props.setUserLogged(await UsuarioDAO.login(props.userLogged.email, props.userLogged.senha));
                            alert("Adicionado com sucesso");
                        } catch(e) {
                            alert(e);
                        }
                    }}>Iniciar Período Menstrual</Button>
                    <Button onPress={async () => {
                        try {
                            await InteracaoDAO.novaInteracaoDeUsuario(props.userLogged.id, {
                                interacao: 'fimMenstruacao',
                                data: props.daySelected.toDate(),
                            });
                            props.setUserLogged(await UsuarioDAO.login(props.userLogged.email, props.userLogged.senha));
                            alert("Adicionado com sucesso");
                        } catch(e) {
                            alert(e);
                        }
                    }}>Finalizar Período Menstrual</Button>
                </View>
            </BottomModal>
            <Calendar onTouchDay={(day) => {
                setModalOpen(true);
                props.selectDay(day);
            }}/>
            <Button onPress={
                () => {
                    props.navigation.navigate('CartaoMulher');
                }
            }>Ver Cartão</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
    },
    text: {
        color: '#000',
    },
    modalContainer: {
        paddingHorizontal: 15,
    },
    interactions: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    modalTitle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 15,
    },
    modalH2: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});

const mapStateToProps = state => ({
    userLogged: state.general.userLogged,
    daySelected: state.general.daySelected,
});

const mapDispatchToProps = dispatch => ({
    selectDay: day => dispatch({type: Actions.selectDay, payload: day}),
    setUserLogged: userLogged => dispatch({type: Actions.setUserLogged, payload: userLogged}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
