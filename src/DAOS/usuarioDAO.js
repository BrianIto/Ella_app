import firestore from '@react-native-firebase/firestore';
import InteracaoDAO from "./interacaoDAO";

const UsuarioDAO = {
    registerUsuario: async (usuario) => {
        return await firestore().collection('usuario').add(usuario);
    },
    getUsuarios: async () => {
        let usuariosSnapshot =  await firestore().collection('usuario').get();
        let array = [];
        usuariosSnapshot.forEach(usuario => {
            array.push({...usuario.data(), id: usuario.id});
        });
        return array;
    },
    login: async (email, password) => {
        let usuarios = await UsuarioDAO.getUsuarios();
        for (let i = 0; i < usuarios.length; i++) {
            if ((usuarios[i].cpf === email || usuarios[i].email === email)
                && usuarios[i].senha === password) {
                let interacoes = await InteracaoDAO.getInteracoesFromUsuario(usuarios[i].id);
                return {...usuarios[i], interacoes: interacoes};
            }
        }
    },
    updateUsuario: async (userId, changes) => {
        await firestore().collection('usuario').doc(userId).set(changes);
    }
}

export default UsuarioDAO;
