import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Calendar from '../../components/Calendar';
import Button from '../../components/Button';

const Main = props => {

    return (
        <View style={styles.container}>
            <Calendar />
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
    }
});

export default Main;
