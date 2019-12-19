import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const GoalInput = (props) => {
  return <TextInput
    placeholder="Course Goal"
    style={styles.input}
    onChangeText={props.getInputHandler}
    value={props.enteredGoal}
  />
}

export default GoalInput

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderColor: "green",
    borderWidth: 1,
    padding: 10
  }
});
