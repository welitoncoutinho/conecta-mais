import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import CORES_TEMA from '../configuracaoTemaVisual/coresTema';

export default function BotaoVoltarSimples({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel="Voltar para a tela anterior"
        >
            <Text style={styles.textoBotaoVoltar}>{'< Voltar'}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botaoVoltar: {
        position: 'absolute',
        top: 10,
        left: 20,
        zIndex: 10,
        padding: 8,
        borderRadius: 8,
    },
    textoBotaoVoltar: {
        fontSize: 16,
        color: CORES_TEMA.azulCalmo,
        fontWeight: 'bold',
    },
});
