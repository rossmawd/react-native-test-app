//here have the reducer (state updating) logic for our goals


const initialState = {
  courseGoals: []
}

//takes in the old state + the action that has been dispatched by the component
const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COURSE_GOAL:
      if (action.enteredGoal.length === 0) {
        return state
      } else {
        let newGoal = { key: Math.random().toString(), value: action.enteredGoal }
        let updatedGoals = [...state.courseGoals]
        updatedGoals.push(newGoal)
        return { ...state, courseGoals: updatedGoals }
      }

    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals]
        //below removes fav from FavMeals
        updatedFavMeals.splice(existingIndex, 1)
        return { ...state, favoriteMeals: updatedFavMeals }
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId)
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
      }
    default:
      return state;
  }
}


export default goalReducer