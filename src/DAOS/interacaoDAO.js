import firestore from '@react-native-firebase/firestore';

const InteracaoDAO = {
    getInteracoesFromUsuario: async usuarioId => {
        const interacoesSnap = await firestore().collection('usuario').doc(usuarioId).collection('interacoes').get()
        let array = [];
        interacoesSnap.forEach(interacao => {
            array.push({...interacao.data(), id: interacao.id});
        });
        return array;
    },
    novaInteracaoDeUsuario: async (usuarioId, interacao) => {
        await firestore().collection('usuario').doc(usuarioId).collection('interacoes').add(interacao);
    }
}

export default InteracaoDAO;
