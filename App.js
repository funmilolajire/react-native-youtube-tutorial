import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import "react-native-get-random-values"
import { v4 as uuid } from 'uuid'

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Juice' },
  ])
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }
  const addItem = (text) => {
    if (text.length) {
      setItems(prev => ([{ id: uuid(), text }, ...prev]))
    } else {
      Alert.alert("Error", "Please enter an item", [{ text: "Ok" }])
    }
  }
  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} keyExtractor={(item) => item.id} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;