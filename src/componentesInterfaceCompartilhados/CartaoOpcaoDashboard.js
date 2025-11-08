import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import CORES_TEMA from '../configuracaoTemaVisual/coresTema';

const { width } = Dimensions.get('window');

export default function CartaoOpcaoDashboard({ icone, titulo, onPress, cor }) {
    return (
        <TouchableOpacity
            style={[styles.cartaoDashboard, { backgroundColor: cor }]}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={titulo}
        >
            <Text style={styles.iconeDashboard}>{icone}</Text>
            <Text style={styles.tituloCartaoDashboard}>{titulo}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cartaoDashboard: {
        width: width / 2 - 30,
        height: 150,
        borderRadius: 16,
        padding: 16,
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    iconeDashboard: {
        fontSize: 32,
    },
    tituloCartaoDashboard: {
        fontSize: 18,
        fontWeight: 'bold',
        color: CORES_TEMA.branco,
    },
});
