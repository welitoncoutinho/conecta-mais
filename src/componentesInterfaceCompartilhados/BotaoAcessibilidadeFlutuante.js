import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import CORES_TEMA from '../configuracaoTemaVisual/coresTema';

export default function BotaoAcessibilidadeFlutuante({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.fab}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel="Abrir opções de acessibilidade"
        >
            <Text style={styles.icon}>♿</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        bottom: 25,
        right: 25,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: CORES_TEMA.azulCalmo,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
        zIndex: 100,
    },
    icon: {
        fontSize: 28,
        color: CORES_TEMA.branco,
    },
});
