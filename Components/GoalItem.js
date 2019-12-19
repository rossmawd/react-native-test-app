import React from "react"
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = props => {
  return <View style={styles.listItem}>
    <Text >{props.value}</Text>
  </View>
}

export default GoalItem

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    width: "50%",
    margin: 5,
    backgroundColor: 'yellow',
    borderColor: 'blue',
    borderWidth: 1
  }
});