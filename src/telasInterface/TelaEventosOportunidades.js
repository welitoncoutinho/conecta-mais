import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import CORES_TEMA from '../configuracaoTemaVisual/coresTema';
import BotaoVoltarSimples from '../componentesInterfaceCompartilhados/BotaoVoltarSimples';
import BotaoAcessibilidadeFlutuante from '../componentesInterfaceCompartilhados/BotaoAcessibilidadeFlutuante';
import ModalOpcoesAcessibilidade from '../componentesInterfaceCompartilhados/ModalOpcoesAcessibilidade';
import { DADOS_EVENTOS } from '../fontesDadosMockados/dadosServicosEventosMock';

export default function TelaEventosOportunidades({ navigation }) {
    const [modalVisivel, setModalVisivel] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <BotaoVoltarSimples onPress={() => navigation.goBack()} />
            <Text style={[styles.tituloPagina, { textAlign: 'center', marginTop: 30 }]}>
                Eventos e Oportunidades
            </Text>

            <ScrollView>
                {DADOS_EVENTOS.map(evento => (
                    <View key={evento.id} style={styles.cardEvento}>
                        <Text style={styles.tituloCardEvento}>{evento.titulo}</Text>
                        <Text style={styles.dataCardEvento}>{evento.data}</Text>
                        <Text style={styles.textoCardEvento}>{evento.desc}</Text>
                        <TouchableOpacity
                            style={styles.botaoParticipar}
                            onPress={() =>
                                Alert.alert('Participar', `Você será lembrado do evento: ${evento.titulo}`)
                            }
                        >
                            <Text style={styles.textoBotaoPrincipal}>Quero Participar</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

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
    cardEvento: {
        backgroundColor: CORES_TEMA.branco,
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    tituloCardEvento: {
        fontSize: 20,
        fontWeight: 'bold',
        color: CORES_TEMA.preto,
    },
    dataCardEvento: {
        fontSize: 16,
        fontWeight: 'bold',
        color: CORES_TEMA.verdeEsperanca,
        marginVertical: 8,
    },
    textoCardEvento: {
        fontSize: 16,
        color: CORES_TEMA.preto,
        marginBottom: 16,
    },
    botaoParticipar: {
        backgroundColor: CORES_TEMA.verdeEsperanca,
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
    },
    textoBotaoPrincipal: {
        color: CORES_TEMA.branco,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
