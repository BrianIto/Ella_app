import React from 'react'
import InputText from '../../components/InputText'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
    
    const [formCartaoMulher, setCartaoMulher] = React.useState({
        nome: '',
        idade: 0,
        dataNascimento: '01/01/1971',
        cartaoSUS: '',
        altura: 0,
        peso: 0,
        cicloMenstrual: 0,
        doencasCronicas: '',
    })

    return (
        <View>
            <InputText 
                label={"Nome"}
                placeholder={"Informe aqui o seu nome"}
                onChange={text => setCartaoMulher({...formCartaoMulher, nome: text})}
            />
            <InputText
                label={"Idade"}
                placeholder={"Informe aqui o sua Idade"}
                onChange={text => setCartaoMulher({ ...formCartaoMulher, idade: text })}
            />
            <InputText
                label={"Data de Nascimento"}
                placeholder={"dd/mm/aaaa"}
                onChange={text => setCartaoMulher({ ...formCartaoMulher, dataNascimento: text })}
            />
            <InputText
                label={"Cartão do SUS"}
                placeholder={"Ex: 8941782013"}
                onChange={text => setCartaoMulher({ ...formCartaoMulher, cartaoSUS: text })}
            />
            <InputText
                label={"Altura"}
                placeholder={"Informe aqui sua altura em centímetros"}
                onChange={text => setCartaoMulher({ ...formCartaoMulher, altura: text })}
            />
            <InputText
                label={"Peso"}
                placeholder={"Informe aqui seu peso em kg."}
                onChange={text => setCartaoMulher({ ...formCartaoMulher, peso: text })}
            />
            <InputText
                label={"Ciclo Menstrual"}
                placeholder={"Informe aqui a duração do seu ciclo em dias."}
                onChange={text => setCartaoMulher({ ...formCartaoMulher, cicloMenstrual: text })}
            />
            <InputText
                label={"Doenças Crônicas"}
                placeholder={"Informe as doenças crônicas que possui."}
                onChange={text => setCartaoMulher({ ...formCartaoMulher, doencasCronicas: text })}
            />
            <Button>Confirmar</Button>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
