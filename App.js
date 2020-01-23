import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";
//Redux Stuff
import goalReducer from './store/reducers/goals';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import addCourseGoal from './store/actions/goals.js'

const rootReducer = combineReducers({
  goals: goalReducer
})

const store = createStore(rootReducer)



export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)
  console.log("RE-RENDERING component")

  // const dispatch = useDispatch()

  function getInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  //this will ONLY console.log if the courseGoals have changed:
  useEffect(() => {
    console.log(courseGoals);
  }, [courseGoals]);

  const addGoalHandler = () => {
    // if (enteredGoal.length === 0) {
    //   return;
    // }
    // setCourseGoals(courseGoals => [...courseGoals,
    // { key: Math.random().toString(), value: enteredGoal }
    // ]);
    // dispatch(addCourseGoal(enteredGoal))

    setIsAddMode(false)
    setEnteredGoal("")
  };

  const removeGoalHandler = goalId => {
    return setCourseGoals(courseGoals.filter(goal => goal.key !== goalId))
  }

  const cancelAdd = () => {
    setIsAddMode(false)
  }

  factorial = function (input) {
    if (typeof input !== "number") { return 0 }
    else if (input === 1) {
      return 1
    }

    var total = input
    var i = 1
    do {
      total = total * (input - i)
      i++
    } while (i < (input))
    return total
  };

  return (
    <Provider store={store}>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <Button onPress={() => setIsAddMode(!isAddMode)} title="Add Goal" />
          <GoalInput
            isAddMode={isAddMode}
            setIsAddMode={setIsAddMode}
            setEnteredGoal={setEnteredGoal}
            getInputHandler={getInputHandler}
            enteredGoal={enteredGoal}
            addGoalHandler={addGoalHandler}
            cancelAdd={cancelAdd}
          />
        </View>

        <View />
        <FlatList
          data={courseGoals}
          renderItem={itemData => (<GoalItem value={itemData.item.value}
            removeGoalHandler={() => removeGoalHandler(itemData.item.key)}
          />
          )}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    borderColor: "black",
    borderWidth: 1
  }
});
