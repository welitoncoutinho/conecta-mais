import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import CORES_TEMA from '../configuracaoTemaVisual/coresTema';
import BotaoVoltarSimples from '../componentesInterfaceCompartilhados/BotaoVoltarSimples';
import BotaoAcessibilidadeFlutuante from '../componentesInterfaceCompartilhados/BotaoAcessibilidadeFlutuante';
import ModalOpcoesAcessibilidade from '../componentesInterfaceCompartilhados/ModalOpcoesAcessibilidade';

export default function TelaMapaServicos({ navigation }) {
    const [modalVisivel, setModalVisivel] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <BotaoVoltarSimples onPress={() => navigation.goBack()} />
            <Text style={[styles.tituloPagina, { textAlign: 'center', marginTop: 30 }]}>
                Mapa de Serviços
            </Text>

            <View style={styles.mapaPlaceholder}>
                <Text style={styles.mapaPlaceholderTexto}>[Simulação de Mapa]</Text>
            </View>

            <View style={styles.filtrosMapa}>
                <TouchableOpacity style={styles.chipFiltro}>
                    <Text style={styles.chipTexto}>🍲 Alimentação</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chipFiltro}>
                    <Text style={styles.chipTexto}>🏠 Abrigo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chipFiltro}>
                    <Text style={styles.chipTexto}>🩺 Saúde</Text>
                </TouchableOpacity>
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
    container: { flex: 1, padding: 20, marginTop: 30, backgroundColor: CORES_TEMA.cinzaClaro },
    tituloPagina: {
        fontSize: 26,
        fontWeight: 'bold',
        color: CORES_TEMA.preto,
        marginBottom: 20,
    },
    mapaPlaceholder: {
        height: 300,
        backgroundColor: '#E0E0E0',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    mapaPlaceholderTexto: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#9E9E9E',
    },
    filtrosMapa: {
        flexDirection: 'row',
    },
    chipFiltro: {
        backgroundColor: CORES_TEMA.azulCalmo,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
    },
    chipTexto: {
        color: CORES_TEMA.branco,
        fontWeight: 'bold',
    },
});
