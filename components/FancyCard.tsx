import React from "react";

import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";


export default function FancyCard() {
    return (
        <SafeAreaView>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={styles.card}>
                <Image
                    source={require('../images/faisal_masjid.jpg')}

                    style={styles.cardImage}

                />
                <Text style={styles.cardTitle}>Faisal Masjid</Text>
                <Text style={styles.cardLabel}>Margalla Hill, Islamabad</Text>
                <Text style={styles.cardDescription}>The master plan of the city Islamabad was inspired by the Greek architecture.The plan is triangular and is developed on a grid system with its apex towards the Margalla hills.</Text>
                <View style={styles.footer}>
                <Text style={styles.cardFooter}>6 hrs and 30 mins away</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


// our styleSheet
const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        // color:'#825e5c'
    },
    cardImage: {
        height: 250,
        width: 'auto',
        // borderTopLeftRadius:8,
        // borderTopRightRadius:8,
        borderRadius: 8
    },
    card: {
        margin: 8,
        borderRadius: 8,
        // padding: 8,
        backgroundColor: '#ede7e1'
    },
    cardTitle: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#825e5c'

    },
    cardLabel: {
        paddingHorizontal: 8,
        // paddingVertical:8,
        fontSize: 16,
        fontWeight: 'bold'
    },
    cardDescription: {
        paddingHorizontal: 8,
        // paddingVertical:8,
        fontSize: 14,
        paddingTop: 6,
        color: '#a6915c'
    },
    cardFooter: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        fontSize: 16,
        paddingTop: 6,
        fontWeight: 'bold',
        // flex:1,
        alignItems: 'flex-end',
        // justifyContent:'flex-end'
    },
    footer:{
        flex:1,
        alignItems:'flex-end',
        paddingEnd:12

    }
})