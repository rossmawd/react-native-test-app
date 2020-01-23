import React, { useCallback, useEffect } from 'react'
import { TextInput, StyleSheet, Modal, View, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import addCourseGoal from '../store/actions/goals'



const GoalInput = (props) => {

  const dispatch = useDispatch()


  const addGoalHandler = useCallback(() => {
    dispatch(addCourseGoal(props.enteredGoal))
  }, [dispatch, props.enteredGoal])



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
          <View style={styles.button}>
            {/* Change the below to redux from state */}
            <Button onPress={() => {
              addGoalHandler()
              props.setIsAddMode(false)
              props.setEnteredGoal("")
            }
            }
              title="ADD"

            />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.cancelAdd} />
          </View>
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
    width: "60%"
  },
  button: {
    width: "40%"
  }
});
