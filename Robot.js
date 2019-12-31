fLR = function (input) {
  let commandsArray = input.split("")
  commandsArray = commandsArray.filter(char => char === 'F' || char === 'L' || char === 'R')
  let compass = [[0, 0, 1], [1, 1, 0], [2, 0, -1], [3, -1, 0]]

  let currentPosition = [0, 0, "N"]

  commandsArray.forEach(command => {
    if (command === "R") {
      compass.push(compass.shift())
      console.log("facing", compass[0][0])
      currentPosition[2] = compass[0][0]
    } else if (command === "L") {
      compass.unshift(compass.pop())
      currentPosition[2] = compass[0][0]
    } else if (command === "F") {
      currentPosition[0] += compass[0][1]
      currentPosition[1] += compass[0][2]
    }
  })

  console.log(currentPosition)


  return numberOfCommands(currentPosition, compass)

};

numberOfCommands = function (currentPosition, compass) {
  let requiredTurns = 0
  let x = currentPosition[0]
  let y = currentPosition[1]
  let direction = currentPosition[2]

  if (x > 0) { // want to end up facing 3
    requiredTurns += direction === 0 ? 1 : Math.abs(direction - 3)

  } else if (x < 0) { //want to end up facing 1
    requiredTurns += direction === 3 ? 2 : Math.abs(direction - 1)
  }
  if (y > 0) { // want to end up facing 2
    requiredTurns += direction === 0 ? 2 : Math.abs(direction - 2)
  } else if (y < 0) { //wamt to end up facing 0
    requiredTurns += direction === 2 ? 2 : Math.abs(direction - 2)
  }
  return requiredTurns + Math.abs(x) + Math.abs(y)

}

console.log("the result is", fLR("FFLF"))