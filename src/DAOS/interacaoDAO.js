import firestore from '@react-native-firebase/firestore';

const InteracaoDAO = {
    getInteracoesFromUsuario: async usuarioId => {
        const interacoesSnap = await firestore().collection('usuario').doc(usuarioId).collection('interacoes').get()
        alert("Achei a interação");
        let array = [];
        interacoesSnap.forEach(interacao => {
            array.push({...interacao.data(), id: interacao.id});
        });
        return array;
    },
    novaInteracaoDeUsuario: async (usuarioId, interacao) => {

    }
}

export default InteracaoDAO;
