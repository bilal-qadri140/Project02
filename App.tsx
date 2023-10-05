import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlateCards from './components/FlateCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App() {
  return (
    <ScrollView>
      <View>
        <FlateCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard/>
        <ContactList/>
        {/* <FancyCard /> */}
      </View>
    </ScrollView>

  )
}
export default App;

const styles = StyleSheet.create({})  