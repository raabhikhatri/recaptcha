// script.js

// Select elements
const captchaTextField = document.querySelector('.captcha-text-field');
const reloadBtn = document.querySelector('.reload-btn');
const inputField = document.querySelector('input[type="text"]');
const confirmBtn = document.querySelector('.confirm-btn');
const msgField = document.querySelector('.msg-field');

// Disable Submit button initially
confirmBtn.disabled = true;

// Function to generate random Captcha
function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    captchaTextField.textContent = captcha;
    msgField.textContent = ''; // Clear previous messages
    msgField.style.color = ''; // Reset message color
    confirmBtn.disabled = true; // Disable button whenever Captcha is regenerated
}

// Function to validate Captcha
function validateCaptcha() {
    const userInput = inputField.value.trim(); // Get user input

    if (userInput === captchaTextField.textContent) {
        // Correct Captcha
        msgField.textContent = 'Captcha Matched! ✅';
        msgField.style.color = 'green';
        confirmBtn.disabled = false; // Enable the Submit button
    } else {
        // Incorrect or empty Captcha
        msgField.textContent = 'Invalid Captcha! ❌';
        msgField.style.color = 'red';
        confirmBtn.disabled = true; // Keep Submit button disabled
    }
}

// Add action to the Submit button
function onSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    alert('Form submitted successfully!'); // Replace with your target action
}

// Event Listeners
reloadBtn.addEventListener('click', generateCaptcha); // Reload button
confirmBtn.addEventListener('click', onSubmit); // Submit button action
inputField.addEventListener('input', validateCaptcha); // Validate Captcha on input

// Generate Captcha on page load
window.onload = generateCaptcha;
