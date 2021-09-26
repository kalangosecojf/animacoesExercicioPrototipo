import React, { useState } from 'react';
import { TouchableOpacity, Animated, StyleSheet, Text, View } from 'react-native';

const Dia1609 = () => {

    const valores = [56.76, 28.57, 76.52, 37.76, 62.63];
    const [opacidade0] = useState(new Animated.Value(0));
    const [opacidade1] = useState(new Animated.Value(0));
    const [opacidade2] = useState(new Animated.Value(0));
    const [opacidade3] = useState(new Animated.Value(0));
    const [opacidade4] = useState(new Animated.Value(0));

    const gerarGrafico = () => {
        Animated.sequence([
            Animated.timing(opacidade0, { toValue: 1, duration: 1000 }),
            Animated.timing(opacidade1, { toValue: 1, duration: 1000 }),
            Animated.timing(opacidade2, { toValue: 1, duration: 1000 }),
            Animated.timing(opacidade3, { toValue: 1, duration: 1000 }),
            Animated.timing(opacidade4, { toValue: 1, duration: 1000 }),
        ]).start();
    }

    return (
        <View style={styles.container}>
            <Text
                style={styles.text}> Boletim Epidemiológico {'\n'} 16 de setembro de 2021</Text>
            <View
                style={styles.viewGraficos}>
                <Animated.View
                    style={[styles.viewAnimadas, { height: valores[0], backgroundColor: '#DF8021', opacity: opacidade0 }]}
                >
                    <Text style={styles.viewTextos}>{valores[0]}</Text>
                </Animated.View>
                <Animated.View
                    style={[styles.viewAnimadas, { height: valores[1], backgroundColor: '#44AA8F', opacity: opacidade1 }]}
                >
                    <Text style={styles.viewTextos}>{valores[1]}</Text>
                </Animated.View>
                <Animated.View
                    style={[styles.viewAnimadas, { height: valores[2], backgroundColor: '#AA5344', opacity: opacidade2 }]}
                >
                    <Text style={styles.viewTextos}>{valores[2]}</Text>
                </Animated.View>
                <Animated.View
                    style={[styles.viewAnimadas, { height: valores[3], backgroundColor: '#7c5d9a', opacity: opacidade3 }]}
                >
                    <Text style={styles.viewTextos}>{valores[3]}</Text>
                </Animated.View>
                <Animated.View
                    style={[styles.viewAnimadas, { height: valores[4], backgroundColor: '#345fd0', opacity: opacidade4 }]}
                >
                    <Text style={styles.viewTextos}>{valores[4]}</Text>
                </Animated.View>
            </View>
            <View style={styles.viewBotoes}>
                <TouchableOpacity
                    style={styles.botoes}
                    onPress={gerarGrafico}
                >
                    <Text
                        style={{ fontWeight: 'bold', fontSize: 12, margin: 2 }}>Gerar gráfico</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Dia1609;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#F6F2EE',
        alignItems: 'center',
        marginTop: -40,
        marginBottom: -30,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        alignItems: 'center',
        marginBottom: -20,
    },
    viewGraficos: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    viewAnimadas: {
        width: 40,
        margin: 2,
        alignItems: 'center',
    },
    viewTextos: {
        fontWeight: 'bold',
        fontSize: 10,
    },
    viewBotoes: {
        margin: 4,
    },
    botoes: {
        backgroundColor: '#DDDDDD',
        padding: 4,
        alignItems: 'center',
    }
});
