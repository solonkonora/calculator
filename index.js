// JavaScript code for calculator functionality
const resultInput = document.getElementById('result')
const buttons = document.querySelectorAll('.calculator button')

// Add click event listeners to the calculator buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent
    handleButtonClick(buttonText)
  })
})

// Function to handle button clicks
function handleButtonClick (buttonText) {
  switch (buttonText) {
    case 'AC':
      resultInput.value = ''
      break
    case '+/-':
      negate()
      break
    case '%':
      calculatePercentage()
      break
    case 'DEL':
      deleteLastInput()
      break
    case '=':
      calculateResult()
      break
    case '.':
      appendDecimal()
      break
    case '+':
    case '-':
    case '*':
    case '/':
      appendOperator(buttonText)
      break
    default:
      appendToInput(buttonText)
      break
  }
}

// Function to append the clicked button value to the input field
function appendToInput (value) {
  resultInput.value += value
}

// function to perform the deleting of a value
function deleteLastInput () {
  if (resultInput.value.length > 0) {
    const splittedInputs = resultInput.value.split('')
    splittedInputs.pop()
    const updatedInput = splittedInputs.join('')
    resultInput.value = updatedInput // Update the resultInput.value with the updated input
  }
}

// Function to append decimal point
function appendDecimal () {
  if (!resultInput.value.includes('.')) {
    resultInput.value += '.'
  }
}

// Function to append the clicked operator to the input field
function appendOperator (value) {
  const lastChar = resultInput.value.slice(-1)
  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    // Replace the last operator if it already exists
    resultInput.value = resultInput.value.slice(0, -1) + value
  } else {
    resultInput.value += value
  }
}

// Function to negate the current input value
function negate () {
  const currentValue = parseFloat(resultInput.value) // The parseFloat() function is used to convert the value to a floating-point number. This step ensures that the value is treated as a number rather than a string.
  resultInput.value = -currentValue
}

// Function to calculate the percentage of the current input value
function calculatePercentage () {
  const currentValue = parseFloat(resultInput.value)
  resultInput.value = currentValue / 100
}

const math = require ('mathjs')
function calculateResult() {
  try {
    const expression = resultInput.value
    const result = math.evaluate(expression)
    if (Number.isFinite(result)) {
      resultInput.value = result
    } else {
      throw new Error('Invalid result')
    }
  } catch (error) {
    resultInput.value = 'Error'
  }
}
