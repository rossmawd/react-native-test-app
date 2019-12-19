import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function getInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  //ONLY console.log if the courseGoals have changed
  useEffect(() => {
    console.log(courseGoals);
  }, [courseGoals]);

  const addGoalHandler = () => {
    setCourseGoals(courseGoals => [...courseGoals,
    { key: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={getInputHandler}
          value={enteredGoal}
        />
        <Button onPress={addGoalHandler} title="ADD" />
      </View>
      <View />
      <FlatList data={courseGoals} renderItem={itemData => (
        <View style={styles.listItem}>
          <Text >{itemData.item.value}</Text>
        </View>
      )} />
      {/* {courseGoals.map((goal, i) => (
          <View style={styles.listItem} key={i}>
            <Text >{goal}</Text>
          </View>

        ))} */}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    borderColor: "black",
    borderWidth: 1
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "90%",
    borderColor: "green",
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    width: "50%",
    margin: 5,
    backgroundColor: 'yellow',
    borderColor: 'blue',
    borderWidth: 1
  }
});
