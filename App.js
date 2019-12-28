import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  function getInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  //this will ONLY console.log if the courseGoals have changed:
  useEffect(() => {
    console.log(courseGoals);
  }, [courseGoals]);

  const addGoalHandler = () => {
    setCourseGoals(courseGoals => [...courseGoals,
    { key: Math.random().toString(), value: enteredGoal }
    ]);
  };

  const removeGoalHandler = goalId => {
    return setCourseGoals(courseGoals.filter(goal => goal.key !== goalId))
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Button onPress={() => setIsAddMode(!isAddMode)} title="Add Goal" />
        <GoalInput isAddMode={isAddMode} getInputHandler={getInputHandler} enteredGoal={enteredGoal} addGoalHandler={addGoalHandler} />

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
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    borderColor: "black",
    borderWidth: 1
  }
});
