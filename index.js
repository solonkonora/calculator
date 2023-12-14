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

  if (resultInput.value.length > 0 && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) {
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

// Function to calculate the result
// function calculateResult() {
//   try {
//     const result = eval(resultInput.value); // Using eval to evaluate the arithmetic expression entered in the input field
//     resultInput.value = result;
//   } catch (error) {
//     resultInput.value = 'Error';
//   }
// }
// a calculate function using eval as commented above would do everything below easily, but because linter refuses the use of eval, i had to go this way
function calculateResult () {
  const expression = resultInput.value
  let result

  try {
    result = evaluateExpression(expression)
    resultInput.value = result
  } catch (error) {
    resultInput.value = 'Error'
  }
}

// Function to evaluate the arithmetic expression using basic operations
function evaluateExpression (expression) {
  let operands = expression.split(/([+\-*/])/) // Split the expression into operands and operators

  // Remove any empty strings from the operands array
  operands = operands.filter((operand) => operand.trim() !== '')

  // Perform the calculations using a loop
  let result = parseFloat(operands[0]) // Initialize the result with the first operand

  for (let i = 1; i < operands.length; i += 2) {
    const operator = operands[i]
    const operand = parseFloat(operands[i + 1])

    switch (operator) {
      case '+':
        result += operand
        break
      case '-':
        result -= operand
        break
      case '*':
        result *= operand
        break
      case '/':
        result /= operand
        break
    }
  }
  return result
}
