import React from 'react'
import { TextInput, StyleSheet, Modal, View, Button } from 'react-native'

const GoalInput = (props) => {


  return (
    <Modal animationType="slide" visible={props.isAddMode} >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={props.getInputHandler}
          value={props.enteredGoal}
          style={styles.input}
        />
        <View style={styles.inputButtons}>
          <Button onPress={props.addGoalHandler} title="ADD" />
          <Button title="Cancel" color="red" onPress={props.cancelAdd} />
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderColor: "green",
    borderWidth: 1,
    padding: 10
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%"
  }
});
