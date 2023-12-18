const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (!email.trim() || !password.trim()) {
        alert('All form fields must be filled in');
        return;
    }

    console.log(`Email: ${email.trim()}, Password: ${password.trim()}`);
    form.reset();
    alert('Form submitted successfully!');
}

