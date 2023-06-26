import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import TrendingPlaces from './components/TrendingPlaces'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards/>
      <ElevatedCard/>
      <TrendingPlaces/>
      <ActionCard/>
      <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App