import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CORES_TEMA from '../configuracaoTemaVisual/coresTema';

export default function ModalOpcoesAcessibilidade({ visible, onClose }) {
    const simularAcao = (titulo, mensagem) => {
        Alert.alert(titulo, mensagem);
    };

    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitulo}>Acessibilidade</Text>

                    <TouchableOpacity
                        style={styles.botaoAcessibilidadeModal}
                        onPress={() =>
                            simularAcao('Libras', 'Simulação: Tradutor de Libras (Hand Talk) seria ativado.')
                        }
                    >
                        <Text style={styles.textoBotaoAcessibilidade}>🤟 Traduzir para Libras</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botaoAcessibilidadeModal}
                        onPress={() =>
                            simularAcao('Leitura em Voz Alta', 'Simulação: Leitor de tela seria ativado.')
                        }
                    >
                        <Text style={styles.textoBotaoAcessibilidade}>🔊 Leitura em Voz Alta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botaoAcessibilidadeModal}
                        onPress={() =>
                            simularAcao(
                                'Modo Fácil',
                                'Simulação: Interface com fontes maiores e mais contraste.'
                            )
                        }
                    >
                        <Text style={styles.textoBotaoAcessibilidade}>👁️ Modo Fácil (Alto Contraste)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.botaoPrincipal, { backgroundColor: CORES_TEMA.vermelhoAlerta, marginTop: 20 }]}
                        onPress={onClose}
                    >
                        <Text style={styles.textoBotaoPrincipal}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        backgroundColor: CORES_TEMA.branco,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: CORES_TEMA.preto,
        marginBottom: 20,
        textAlign: 'center',
    },
    botaoAcessibilidadeModal: {
        backgroundColor: CORES_TEMA.cinzaClaro,
        borderRadius: 12,
        paddingVertical: 16,
        marginBottom: 16,
    },
    textoBotaoAcessibilidade: {
        fontSize: 18,
        color: CORES_TEMA.preto,
        textAlign: 'center',
        fontWeight: '500',
    },
    botaoPrincipal: {
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
    },
    textoBotaoPrincipal: {
        color: CORES_TEMA.branco,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
