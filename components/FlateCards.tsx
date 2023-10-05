import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlateCards() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View >

          <View >
            <Text style={styles.headingText}>Flate Cards</Text>
          </View>

          <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
              <Text>Red</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
              <Text>Green</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
              <Text>Blue</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 6
  },
  cardOne: {
    backgroundColor: '#EF5354'
  },
  cardTwo: {
    backgroundColor: '#50DBB4'
  },
  cardThree: {
    backgroundColor: '#5DA3FA'
  }
})