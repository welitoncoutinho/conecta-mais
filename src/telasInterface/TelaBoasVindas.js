import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import CORES_TEMA from '../configuracaoTemaVisual/coresTema';
import BotaoAcessibilidadeFlutuante from '../componentesInterfaceCompartilhados/BotaoAcessibilidadeFlutuante';
import ModalOpcoesAcessibilidade from '../componentesInterfaceCompartilhados/ModalOpcoesAcessibilidade';

export default function TelaBoasVindas({ navigation }) {
    const [modalVisivel, setModalVisivel] = useState(false);

    const selecionarPerfil = (perfil) => {
        navigation.navigate('TelaDashboard', { perfilSelecionado: perfil });
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: CORES_TEMA.azulCalmo }]}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.tituloApp}>Conecta+</Text>
                <Text style={styles.subtituloApp}>Você não está sozinho. Estamos juntos.</Text>

                <View style={styles.cardEscolha}>
                    <Text style={styles.tituloCard}>Como podemos ajudar?</Text>

                    <TouchableOpacity
                        style={[styles.botaoPrincipal, { backgroundColor: CORES_TEMA.verdeEsperanca }]}
                        onPress={() => selecionarPerfil('NECESSITA_APOIO')}
                    >
                        <Text style={styles.textoBotaoPrincipal}>Preciso de apoio</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botaoSecundario}
                        onPress={() => selecionarPerfil('OFERECE_APOIO')}
                    >
                        <Text style={styles.textoBotaoSecundario}>Quero oferecer apoio</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <BotaoAcessibilidadeFlutuante onPress={() => setModalVisivel(true)} />

            <ModalOpcoesAcessibilidade
                visible={modalVisivel}
                onClose={() => setModalVisivel(false)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, marginTop: 30 },
    tituloApp: {
        fontSize: 48,
        fontWeight: 'bold',
        color: CORES_TEMA.branco,
        textAlign: 'center',
    },
    subtituloApp: {
        fontSize: 18,
        color: CORES_TEMA.branco,
        textAlign: 'center',
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    cardEscolha: {
        backgroundColor: CORES_TEMA.branco,
        borderRadius: 16,
        padding: 24,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    tituloCard: {
        fontSize: 22,
        fontWeight: 'bold',
        color: CORES_TEMA.preto,
        textAlign: 'center',
        marginBottom: 24,
    },
    botaoPrincipal: {
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 16,
    },
    textoBotaoPrincipal: {
        color: CORES_TEMA.branco,
        fontSize: 18,
        fontWeight: 'bold',
    },
    botaoSecundario: {
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        backgroundColor: CORES_TEMA.cinzaClaro,
    },
    textoBotaoSecundario: {
        color: CORES_TEMA.azulCalmo,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
