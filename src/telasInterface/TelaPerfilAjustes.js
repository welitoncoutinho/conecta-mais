import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import CORES_TEMA from '../configuracaoTemaVisual/coresTema';
import BotaoVoltarSimples from '../componentesInterfaceCompartilhados/BotaoVoltarSimples';
import BotaoAcessibilidadeFlutuante from '../componentesInterfaceCompartilhados/BotaoAcessibilidadeFlutuante';
import ModalOpcoesAcessibilidade from '../componentesInterfaceCompartilhados/ModalOpcoesAcessibilidade';

export default function TelaPerfilAjustes({ navigation }) {
    const [modalVisivel, setModalVisivel] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <BotaoVoltarSimples onPress={() => navigation.goBack()} />
            <Text style={[styles.tituloPagina, { textAlign: 'center', marginTop: 30 }]}>
                Perfil e Ajustes
            </Text>

            <View style={styles.cardOpcao}>
                <Text style={styles.textoOpcao}>Nome: Usuário Anônimo</Text>
            </View>

            <TouchableOpacity
                style={styles.cardOpcao}
                onPress={() => setModalVisivel(true)}
            >
                <Text style={styles.textoOpcao}>♿ Acessibilidade</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.cardOpcao}
                onPress={() =>
                    Alert.alert('Sugestão', 'Funcionalidade de sugestão ainda não implementada.')
                }
            >
                <Text style={styles.textoOpcao}>📝 Sugerir Melhorias</Text>
            </TouchableOpacity>

            <BotaoAcessibilidadeFlutuante onPress={() => setModalVisivel(true)} />
            <ModalOpcoesAcessibilidade
                visible={modalVisivel}
                onClose={() => setModalVisivel(false)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, marginTop: 30, backgroundColor: CORES_TEMA.cinzaClaro },
    tituloPagina: {
        fontSize: 26,
        fontWeight: 'bold',
        color: CORES_TEMA.preto,
        marginBottom: 20,
    },
    cardOpcao: {
        backgroundColor: CORES_TEMA.branco,
        padding: 20,
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    textoOpcao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: CORES_TEMA.preto,
    },
});
