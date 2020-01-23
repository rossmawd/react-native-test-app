export const ADD_COURSE_GOAL = 'ADD_COURSE_GOAL'

export const addCourseGoal = (goal) => {
  return { type: ADD_COURSE_GOAL, enteredGoal: goal }
}