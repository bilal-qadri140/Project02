import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {

    const contact = [
        {
            uid: 1,
            name: 'Bilal Qadri',
            imageUrl: 'https://avatars.githubusercontent.com/u/84313906?v=4'
        },
        {
            uid: 2,
            name: 'Amir Hussain',
            imageUrl: 'https://scontent-mct1-1.xx.fbcdn.net/v/t39.30808-1/301843520_440362231391520_6719669819737573358_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeHNLmC3uj3i8GsMUE7N4HGtzQ7LmEzSxIzNDsuYTNLEjJz7suXL8U10-ACN8gi1y90VaH85n063em8qzomxarW_&_nc_ohc=6O6Dk7z2fZcAX9VpzIi&_nc_ht=scontent-mct1-1.xx&oh=00_AfDsQpz5tRhlqwhe0LmKnle2QzYScjtoG-UpSNzpJSXXIQ&oe=6523A4CB'
        },
        {
            uid: 3,
            name: 'Maher Usama',
            imageUrl: 'https://scontent-mct1-1.xx.fbcdn.net/v/t1.6435-9/73039937_776683972783223_8695232771892707328_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEBW9hJOUr1wm67fox83k65en0vyYM9tTN6fS_Jgz21Mz3Ls1aquPW1_URluKdai4sQC5C4Z3Yc2l3spmr0eaWb&_nc_ohc=OUgoCrASNzcAX-jLZwT&_nc_ht=scontent-mct1-1.xx&oh=00_AfAQrgIpQ1BMX1wr-ZBoftdSYog8kLp87tpOXKIjiNHZKQ&oe=654600BD'
        },
        {
            uid: 4,
            name: 'Haris Rao',
            imageUrl: 'https://scontent-mct1-1.xx.fbcdn.net/v/t39.30808-6/275083478_250104617320945_4856744005888732844_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFdhDpTZzZ1Hv5XwhDBRFYakMvHIMFeQZGQy8cgwV5BkYTK22VLcWaY3YY1JxypzW7E9Zbmbo4CScFN_YqZ1Xpq&_nc_ohc=vDKo6-7qRoYAX9ZrS-P&_nc_ht=scontent-mct1-1.xx&oh=00_AfDO1M3v1j3VFZY3PumvdTEPFys7jaP2HZwcLk5YmhM3cQ&oe=6522E5D0'
        },
        {
            uid: 5,
            name: 'Usman Pirzada',
            imageUrl: 'https://scontent-mct1-1.xx.fbcdn.net/v/t39.30808-1/376196780_3598849850430708_1661729063446870939_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeE5-VZo0Skea1FQqJf4pCWTxe-rzMPAkObF76vMw8CQ5uqfd02tfp0u6hzTPmcIeRiLpDGdr2Ljq2FaKR1bkOAE&_nc_ohc=bY5ErBiZCi0AX97ZO8E&_nc_ht=scontent-mct1-1.xx&oh=00_AfDBNglYxEC30CVpBwsGgRIWM3gOnFnrrpl4khYJVSnNLw&oe=65233F54'
        },
        {
            uid: 6,
            name: 'Sheraz Asad',
            imageUrl: 'https://scontent-mct1-1.xx.fbcdn.net/v/t39.30808-6/333051651_1147599815903063_6264798533397382367_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFmJxv4Pht04kfCnNkokRvNDsM8mffR0esOwzyZ99HR620ub--DaST7MwlOSQYkqTFfet67Mt_IRDH9XtCZoc0-&_nc_ohc=doCZoFI0nR8AX9s0r3j&_nc_ht=scontent-mct1-1.xx&oh=00_AfDaMFCTfVXDHhpUNASQVXR1RsNUhNmYjYEROj1RHgrfwg&oe=65239DB9'
        }
    ]
    return (
        <View>
            <Text style={styles.headingText}>Friends Forever 😂</Text>

            <ScrollView horizontal>
                {contact.map(({ uid, name, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                        </View>
                    </View>
                ))}
                {/* <View style={[styles.card, styles.cardElevated, styles.cardOne]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated, styles.cardTwo]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated, styles.cardThree]}>
                    <Text>see</Text>
                </View>
                <View style={[styles.card, styles.cardElevated, styles.cardFour]}>
                    <Text>more</Text>
                </View>
                <View style={[styles.card, styles.cardElevated, styles.cardFive]}>
                    <Text>Elevated</Text>
                </View>
                <View style={[styles.card, styles.cardElevated, styles.cardSix]}>
                    <Text>cards</Text>
                </View>
                <View style={[styles.card, styles.cardElevated, styles.cardSeven]}>
                    <Text>😍😍</Text>
                </View> */}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },

    userCard: {
        backgroundColor:'#fff',
        paddingHorizontal:8,
        paddingVertical:6,
        flex:1,
        alignItems:'center'
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginBottom:6,
        borderWidth:2,
        borderColor:'green',
    },
    userName: {
        fontSize:16,
        fontWeight:'bold',
        color:'#0f9470'
    },

    // container: {
    //     padding: 6,
    //     backgroundColor:'red'
    // },
    card: {
        height: 100,
        width: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardElevated: {
        borderRadius: 4,
        margin: 6,
        elevation: 10,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowColor: '#EF5354'
    },
    cardOne: {
        backgroundColor: '#50DBB4'
    },
    cardTwo: {
        backgroundColor: '#5DA3AC'
    },
    cardThree: {
        backgroundColor: '#1cff24'
    },
    cardFour: {
        backgroundColor: '#80ff00'
    },
    cardFive: {
        backgroundColor: '#808080'
    },
    cardSix: {
        backgroundColor: '#1e3fff'
    },
    cardSeven: {
        backgroundColor: '#d98cb3'
    }
})