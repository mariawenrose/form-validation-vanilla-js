const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

// Show Input Error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

// Show Success Outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

function checkEmail(input) {
  const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if(re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, `Email is not valid`)
  }
}

// Check Required Fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

//Check Input Length
function checkLength(input, min, max) {
  if (input.value.length < min ) {
  showError(input, `${getFieldName(input)} must be more than ${min} characters`) 
 } else if (input.value.length > max) {
   showError(input, `${getFieldName(input)} must be less than ${max} characters `)
  } else {
    showSuccess(input)
  }
}

// Check Passwords Match
// and check length

function checkPasswordsMatch(input1, input2, min) {
  if (input1.value !== input2.value) {
    showError(input2, `Sorry these passwords don't match`)
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
  e.preventDefault()


  checkRequired([username, email, password, confirmPassword])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPasswordsMatch(password, confirmPassword)
});