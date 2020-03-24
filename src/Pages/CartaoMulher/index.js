import React from 'react'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import {connect} from "react-redux";
import UsuarioDAO from "../../DAOS/usuarioDAO";

const CartaoMulher = props => {

    const [loading, setLoading] = React.useState(false);
    const [formCartaoMulher, setCartaoMulher] = React.useState({
        nome: '',
        idade: 0,
        dataNascimento: '01/01/1971',
        cartaoSUS: '',
        altura: 0,
        peso: 0,
        cicloMenstrual: 0,
        doencasCronicas: '',
    });

    const onSubmit = () => {
        setLoading(true);
        UsuarioDAO.updateUsuario(props.userLogged.id, formCartaoMulher).then(() => {
            alert("Atualizado com sucesso!");
            setLoading(false)
        }).catch(e => {
            alert(e);
            setLoading(false)
        });
    }

    return (
        <ScrollView contentContainerStyle={{marginHorizontal: 15, paddingBottom: 20}}>
            <Text style={styles.h1}>Informações</Text>
            <InputText
                label={"Nome"}
                defaultValue={props.userLogged.nome}
                placeholder={"Informe aqui o seu nome"}
                onChange={text => setCartaoMulher({...formCartaoMulher, nome: text})}
            />
            <View style={{flexDirection: 'row'}}>
                <InputText
                    style={{flex: 1, marginRight: 15}}
                    label={"Idade"}
                    placeholder={"Sua idade"}
                    onChange={text => setCartaoMulher({...formCartaoMulher, idade: text})}
                />
                <InputText
                    style={{flex: 1}}
                    label={"Data de Nascimento"}
                    placeholder={"dd/mm/aaaa"}
                    onChange={text => setCartaoMulher({...formCartaoMulher, dataNascimento: text})}
                />
            </View>
            <InputText
                label={"Cartão do SUS"}
                placeholder={"Ex: 8941782013"}
                onChange={text => setCartaoMulher({...formCartaoMulher, cartaoSUS: text})}
            />
            <View style={{flexDirection: 'row'}}>
                <InputText
                    style={{flex: 1, marginRight: 15}}
                    label={"Altura"}
                    placeholder={"Altura em cm"}
                    onChange={text => setCartaoMulher({...formCartaoMulher, altura: text})}
                />
                <InputText
                    style={{flex: 1}}
                    label={"Peso"}
                    placeholder={"Peso em kg."}
                    onChange={text => setCartaoMulher({...formCartaoMulher, peso: text})}
                />
            </View>
            <InputText
                label={"Ciclo Menstrual"}
                placeholder={"Informe aqui a duração do seu ciclo em dias."}
                onChange={text => setCartaoMulher({...formCartaoMulher, cicloMenstrual: text})}
            />
            <InputText
                label={"Possui doenças como diabetes e hipertensão? Quais?"}
                placeholder={"Informe as doenças crônicas que possui."}
                onChange={text => setCartaoMulher({...formCartaoMulher, doencasCronicas: text})}
            />
            <Button onPress={onSubmit} loading={loading}>Confirmar</Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
        marginTop: 25,
        marginLeft: 15,
    },
    h1: {
        marginTop: 15,
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#000',
    }
})

const mapStateToProps = state => ({
    userLogged: state.general.userLogged,
})

export default connect(mapStateToProps)(CartaoMulher);

