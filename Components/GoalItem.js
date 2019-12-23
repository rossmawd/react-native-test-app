import React from "react"
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const GoalItem = props => {
  return (
    <TouchableHighlight
      underlayColor={'blue'}
    >
      <View style={styles.listItem}>
        <Text >{props.value}</Text>
      </View>
    </TouchableHighlight>
  )
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