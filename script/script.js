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

// Check Email is Valid
function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function (e) {
  e.preventDefault()

  if (username.value === '') {
    showError(username, 'Username is required')
  } else {
    showSuccess(username)
  }

  if (email.value === '') {
    showError(email, 'Email is required')

  } else if (!isEmailValid(email.value)) {
    showError('This is not a valid email')

  } else {
    showSuccess(email)
  }

  if (password.value === '') {
    showError(password, 'Password is required')
  } else {
    showSuccess(password)
  }

  if (confirmPassword.value === '') {
    showError(confirmPassword, 'Password is required')
  } else {
    showSuccess(confirmPassword)
  }

  if(confirmPassword.value !== password.value) {
  showError(confirmPassword, 'Sorry these passwords dont match') 
  } else {
    showSuccess (confirmPassword)
  }
});