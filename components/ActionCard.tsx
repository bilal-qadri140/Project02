import {
    Image,
    Linking,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>

            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.containerCard}>
                    <Text style={styles.headerText}>
                        What's new in JavaScript 21 | ES12
                    </Text>
                </View>
                <Image
                    source={require('../images/JavaScript.jpg')}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={4} style={styles.descriptionText} >JavaScript updates involve periodic enhancements and additions to the programming language, improving its functionality, syntax, and performance. These updates are crucial for maintaining the language's relevance and ensuring it remains a powerful tool for web development. Staying informed about JavaScript updates is essential for developers to leverage the latest capabilities and maintain secure and efficient web applications.</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')
                        }}>
                        <Text style={styles.socialLinks}>
                            Read more
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            openWebsite('https://www.linkedin.com/in/muhammad-bilal-qadri-a29498220/')
                        }}>
                        <Text style={styles.socialLinks}>
                            Follow me
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    card: {
        // height:420,
        width: 'auto',
        backgroundColor: '#ff9470',
        margin: 8,
        // marginBottom: 60
    },
    elevatedCard: {
        borderRadius: 6,
        elevation: 9,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.2
    },
    containerCard: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    cardImage: {
        height: 250,
        width: 'auto',
        // marginBottom:8
    },
    bodyContainer: {
        paddingHorizontal: 8,
        paddingVertical: 8
    },
    descriptionText: {
        fontSize: 16,
        paddingBottom:4
    },
    footerContainer: {
        paddingHorizontal:18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom:15
    },
    socialLinks: {
        fontSize:18,
        fontWeight:'bold',
        backgroundColor:'#fff',
        paddingHorizontal:12,
        paddingVertical:3,
        borderRadius:8,
        // elevation
        elevation: 9,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowColor:'#000'
    }
})