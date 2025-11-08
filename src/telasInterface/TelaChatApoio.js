import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import CORES_TEMA from '../configuracaoTemaVisual/coresTema';
import BotaoVoltarSimples from '../componentesInterfaceCompartilhados/BotaoVoltarSimples';
import BotaoAcessibilidadeFlutuante from '../componentesInterfaceCompartilhados/BotaoAcessibilidadeFlutuante';
import ModalOpcoesAcessibilidade from '../componentesInterfaceCompartilhados/ModalOpcoesAcessibilidade';

export default function TelaChatApoio({ navigation }) {
    const [modalVisivel, setModalVisivel] = useState(false);

    return (
        <SafeAreaView style={[styles.container, { paddingBottom: 80 }]}>
            <BotaoVoltarSimples onPress={() => navigation.goBack()} />
            <Text style={[styles.tituloPagina, { textAlign: 'center', marginTop: 30 }]}>
                Chat de Apoio
            </Text>

            <ScrollView style={styles.chatContainer}>
                <Text style={styles.chatMensagem}>
                    🤖 Olá! Eu sou o assistente virtual do Conecta+. Como posso ajudar?
                </Text>
                <Text style={styles.chatMensagem}>
                    🤖 Você pode perguntar sobre:{"\n"}1. Onde encontrar abrigos?{"\n"}2. Como conseguir
                    cesta básica?
                </Text>
                <Text style={[styles.chatMensagem, styles.chatMensagemUsuario]}>
                    Onde encontro abrigos?
                </Text>
                <Text style={styles.chatMensagem}>
                    🤖 Buscando abrigos próximos... Encontrei o "Albergue Municipal Tia Branca". Veja no
                    catálogo para mais detalhes.
                </Text>
            </ScrollView>

            <View style={styles.chatInputContainer}>
                <Text style={styles.chatInput}>Digite sua mensagem...</Text>
                <TouchableOpacity>
                    <Text style={styles.chatEnviar}>Enviar</Text>
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
    chatContainer: {
        flex: 1,
    },
    chatMensagem: {
        backgroundColor: CORES_TEMA.branco,
        padding: 12,
        borderRadius: 12,
        borderTopLeftRadius: 0,
        marginBottom: 10,
        maxWidth: '85%',
        alignSelf: 'flex-start',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    chatMensagemUsuario: {
        backgroundColor: CORES_TEMA.azulCalmo,
        color: CORES_TEMA.branco,
        alignSelf: 'flex-end',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 0,
    },
    chatInputContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: CORES_TEMA.cinzaClaro,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    chatInput: {
        flex: 1,
        padding: 10,
        backgroundColor: CORES_TEMA.branco,
        borderRadius: 20,
        borderColor: '#E0E0E0',
        borderWidth: 1,
    },
    chatEnviar: {
        padding: 10,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: CORES_TEMA.azulCalmo,
        alignSelf: 'center',
    },
});
