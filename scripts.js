const CSS_ERROR_CLASS = "error";
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#confirm-password");

function removeErrorClass() {
    passwordInput.classList.remove(CSS_ERROR_CLASS);
    passwordConfirmInput.classList.remove(CSS_ERROR_CLASS);
}

function addErrorClass() {
    passwordInput.classList.add(CSS_ERROR_CLASS);
    passwordConfirmInput.classList.add(CSS_ERROR_CLASS);
}

function changePasswordInputHighlight(password, passwordConfirm) {
    if (password === passwordConfirm) {
        removeErrorClass();
    } else {
        addErrorClass();
    }
}

function handlePasswordInput() {
    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;

    changePasswordInputHighlight(password, passwordConfirm);
}

passwordInput.addEventListener("keyup", handlePasswordInput);
passwordConfirmInput.addEventListener("keyup", handlePasswordInput);
