import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import CORES_TEMA from '../configuracaoTemaVisual/coresTema';
import BotaoVoltarSimples from '../componentesInterfaceCompartilhados/BotaoVoltarSimples';
import BotaoAcessibilidadeFlutuante from '../componentesInterfaceCompartilhados/BotaoAcessibilidadeFlutuante';
import ModalOpcoesAcessibilidade from '../componentesInterfaceCompartilhados/ModalOpcoesAcessibilidade';
import { DADOS_SERVICOS } from '../fontesDadosMockados/dadosServicosEventosMock';

export default function TelaCatalogoApoio({ navigation }) {
    const [modalVisivel, setModalVisivel] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <BotaoVoltarSimples onPress={() => navigation.goBack()} />
            <Text style={[styles.tituloPagina, { textAlign: 'center', marginTop: 30 }]}>
                Catálogo de Apoio
            </Text>

            <ScrollView>
                {DADOS_SERVICOS.map(servico => (
                    <View key={servico.id} style={styles.cardCatalogo}>
                        <Text style={styles.iconeCard}>{servico.icone}</Text>
                        <View style={styles.infoCard}>
                            <Text style={styles.tituloCardCatalogo}>{servico.nome}</Text>
                            <Text style={styles.textoCardCatalogo}>{servico.categoria}</Text>
                            <Text style={styles.textoCardCatalogo}>{servico.endereco}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.botaoContato}
                            onPress={() =>
                                Alert.alert('Contato', `Ligando para ${servico.nome}... (Simulação)`)
                            }
                            accessibilityLabel={`Ligar para ${servico.nome}`}
                        >
                            <Text style={styles.textoBotaoContato}>📞</Text>
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
    cardCatalogo: {
        backgroundColor: CORES_TEMA.branco,
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    iconeCard: {
        fontSize: 36,
        marginRight: 16,
    },
    infoCard: {
        flex: 1,
    },
    tituloCardCatalogo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: CORES_TEMA.preto,
    },
    textoCardCatalogo: {
        fontSize: 14,
        color: CORES_TEMA.preto,
        marginTop: 2,
    },
    botaoContato: {
        backgroundColor: CORES_TEMA.verdeEsperanca,
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    textoBotaoContato: {
        fontSize: 20,
        color: CORES_TEMA.branco,
    },
});
