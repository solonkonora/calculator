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
function handleButtonClick(buttonText) {
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
    case 'Del':
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
function appendToInput(value) {
  resultInput.value += value
}

//function to perform the deleting of a value
function deleteLastInput() {
  if (Input.length === 0) {
    return resultInput.value
  } else {
    let inputs = inputs.split(" ")
    inputs.pop()
  }
  let updatedInput = inputs.join(" ")
  return updatedInput
}
console.log(deleteLastInput())

// Function to append decimal point
function appendDecimal() {
  if (!resultInput.value.includes('.')) {
    resultInput.value += '.'
  }
}

// Function to append the clicked operator to the input field
function appendOperator(value) {
  const lastChar = resultInput.value.slice(-1)
  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    // Replace the last operator if it already exists
    resultInput.value = resultInput.value.slice(0, -1) + value
  } else {
    resultInput.value += value
  }
}

// Function to negate the current input value
function negate() {
  const currentValue = parseFloat(resultInput.value)
  resultInput.value = -currentValue
}

// Function to calculate the percentage of the current input value
function calculatePercentage() {
  const currentValue = parseFloat(resultInput.value)
  resultInput.value = currentValue / 100
}

// Function to calculate the result of the arithmetic expression in the input field
function calculateResult() {
  try {
    const result = eval(resultInput.value)
    resultInput.value = result
  } catch (error) {
    resultInput.value = 'Error'
  }
}
