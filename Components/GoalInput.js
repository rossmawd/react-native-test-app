import React from 'react'
import { TextInput, StyleSheet, Modal, View, Button } from 'react-native'

const GoalInput = (props) => {
  return (
    <Modal visible={props.isAddMode}>
      <View style={styles.input}>
        <TextInput
          placeholder="Course Goal"

          onChangeText={props.getInputHandler}
          value={props.enteredGoal}
        />
        <Button onPress={props.addGoalHandler} title="ADD" color={"red"} />
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
  }
});
