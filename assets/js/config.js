/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage In order to see the config changes in the template.
 * ! To clear local storage: (https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/).
 */

'use strict';

// JS global variables
let config = {
  colors: {
    primary: '#696cff',
    secondary: '#8592a3',
    success: '#71dd37',
    info: '#03c3ec',
    warning: '#ffab00',
    danger: '#ff3e1d',
    dark: '#233446',
    black: '#000',
    white: '#fff',
    body: '#f4f5fb',
    headingColor: '#566a7f',
    axisColor: '#a1acb8',
    borderColor: '#eceef1'
  }
};


document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from refreshing the page
  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  if (validateEmail(email)) {
      document.getElementById('responseMessage').textContent = "Password reset link sent to your email!";
      emailInput.value = ''; // Clear the input field
  } else {
      document.getElementById('responseMessage').textContent = "Please enter a valid email address.";
  }
});

// Validate email format
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}