import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaBoasVindas from '../telasInterface/TelaBoasVindas';
import TelaDashboard from '../telasInterface/TelaDashboard';
import TelaMapaServicos from '../telasInterface/TelaMapaServicos';
import TelaCatalogoApoio from '../telasInterface/TelaCatalogoApoio';
import TelaChatApoio from '../telasInterface/TelaChatApoio';
import TelaEventosOportunidades from '../telasInterface/TelaEventosOportunidades';
import TelaPerfilAjustes from '../telasInterface/TelaPerfilAjustes';

const Stack = createNativeStackNavigator();

export default function NavegacaoRaiz() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaBoasVindas" component={TelaBoasVindas} />
            <Stack.Screen name="TelaDashboard" component={TelaDashboard} />
            <Stack.Screen name="TelaMapaServicos" component={TelaMapaServicos} />
            <Stack.Screen name="TelaCatalogoApoio" component={TelaCatalogoApoio} />
            <Stack.Screen name="TelaChatApoio" component={TelaChatApoio} />
            <Stack.Screen name="TelaEventosOportunidades" component={TelaEventosOportunidades} />
            <Stack.Screen name="TelaPerfilAjustes" component={TelaPerfilAjustes} />
        </Stack.Navigator>
    );
}
