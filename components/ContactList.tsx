import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contact = [
        {
            uid: 1,
            name: 'Hitesh Chaudhary',
            status: 'I make coding videos on youtube.',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4'
        },
        {
            uid: 2,
            name: 'Bilal Qadri',
            status: 'Patienate about learning new tech.',
            imageUrl: 'https://avatars.githubusercontent.com/u/84313906?v=4'
        },
        {
            uid: 3,
            name: 'Haris Rao',
            status: 'Love to play Cricket.',
            imageUrl: 'https://scontent-mct1-1.xx.fbcdn.net/v/t39.30808-6/275083478_250104617320945_4856744005888732844_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFdhDpTZzZ1Hv5XwhDBRFYakMvHIMFeQZGQy8cgwV5BkYTK22VLcWaY3YY1JxypzW7E9Zbmbo4CScFN_YqZ1Xpq&_nc_ohc=vDKo6-7qRoYAX9ZrS-P&_nc_ht=scontent-mct1-1.xx&oh=00_AfDO1M3v1j3VFZY3PumvdTEPFys7jaP2HZwcLk5YmhM3cQ&oe=6522E5D0'
        },
        {
            uid: 4,
            name: 'Usman Pirzada',
            status: 'Love to enjoy life with girls.',
            imageUrl: 'https://scontent-mct1-1.xx.fbcdn.net/v/t39.30808-1/376196780_3598849850430708_1661729063446870939_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeE5-VZo0Skea1FQqJf4pCWTxe-rzMPAkObF76vMw8CQ5uqfd02tfp0u6hzTPmcIeRiLpDGdr2Ljq2FaKR1bkOAE&_nc_ohc=bY5ErBiZCi0AX97ZO8E&_nc_ht=scontent-mct1-1.xx&oh=00_AfDBNglYxEC30CVpBwsGgRIWM3gOnFnrrpl4khYJVSnNLw&oe=65233F54'
        }
    ]
    return (
        <View >
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
                style={styles.container}
            >
                {contact.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        marginBottom:8
    },
    container: {
        paddingHorizontal:8,
        
        marginBottom: 60
    },
    userCard: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:8,
        backgroundColor:'#efcfe3',
        paddingHorizontal:10,
        paddingVertical:6,
        borderRadius:8,

        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowColor:'#000'
    },
    userImage: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        marginRight:8,

        
    },
    userName: {
        fontSize:18,
        fontWeight:'bold',
        color:'#000'
    },
    userStatus: {
        fontSize:16
    }
})