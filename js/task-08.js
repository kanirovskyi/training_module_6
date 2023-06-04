const formLogin = document.querySelector(".login-form");
const formEl = formLogin.elements;
const inputsForm = {};

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    }
    else {
        inputsForm.email = email.value;
        inputsForm.password = password.value;
        console.log(inputsForm);
        event.currentTarget.reset();
    }
}); 
