import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import CORES_TEMA from '../configuracaoTemaVisual/coresTema';
import CartaoOpcaoDashboard from '../componentesInterfaceCompartilhados/CartaoOpcaoDashboard';
import BotaoAcessibilidadeFlutuante from '../componentesInterfaceCompartilhados/BotaoAcessibilidadeFlutuante';
import ModalOpcoesAcessibilidade from '../componentesInterfaceCompartilhados/ModalOpcoesAcessibilidade';

export default function TelaDashboard({ navigation, route }) {
    const [modalVisivel, setModalVisivel] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.tituloPagina}>Olá! O que você busca?</Text>

            <ScrollView contentContainerStyle={styles.gridDashboard}>
                <CartaoOpcaoDashboard
                    icone="🗺️"
                    titulo="Serviços próximos"
                    cor={CORES_TEMA.azulCalmo}
                    onPress={() => navigation.navigate('TelaMapaServicos')}
                />
                <CartaoOpcaoDashboard
                    icone="🗂️"
                    titulo="Catálogo de Apoio"
                    cor={CORES_TEMA.verdeEsperanca}
                    onPress={() => navigation.navigate('TelaCatalogoApoio')}
                />
                <CartaoOpcaoDashboard
                    icone="💬"
                    titulo="Chat de Apoio"
                    cor={CORES_TEMA.amareloSuave}
                    onPress={() => navigation.navigate('TelaChatApoio')}
                />
                <CartaoOpcaoDashboard
                    icone="📅"
                    titulo="Eventos e Vagas"
                    cor={CORES_TEMA.azulCalmo}
                    onPress={() => navigation.navigate('TelaEventosOportunidades')}
                />
                <CartaoOpcaoDashboard
                    icone="📢"
                    titulo="Alertas Urgentes"
                    cor={CORES_TEMA.vermelhoAlerta}
                    onPress={() => alert('Nenhum alerta urgente no momento.')}
                />
                <CartaoOpcaoDashboard
                    icone="⚙️"
                    titulo="Perfil e Ajustes"
                    cor={'#8E44AD'}
                    onPress={() => navigation.navigate('TelaPerfilAjustes')}
                />
            </ScrollView>

            <TouchableOpacity
                style={[
                    styles.cardOpcao,
                    { marginTop: 20, borderColor: CORES_TEMA.vermelhoAlerta, backgroundColor: '#FFF0F0' },
                ]}
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'TelaBoasVindas' }],
                    })
                }
            >
                <Text style={[styles.textoOpcao, { color: CORES_TEMA.vermelhoAlerta }]}>Sair</Text>
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
    gridDashboard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
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
