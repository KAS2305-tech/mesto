const object = {   //объекты валидации
    formSelector: '.popup__body', //блок формы
    inputSelector: '.popup__input', //поле формы
    inputValidClass: 'popup__field_valid',
    inputErrorClass: 'popup__field_invalid',
    submitButtonSelector: '.popup__button-submit', //кнопка сохранить
    inactiveButtonClass: '.popup__button-submit_disabled', //кнопка неактивна
    activeButtonClass: 'popup__submit_active',
    errorClass: 'popup__error_visible',
}

const enableValidation = ({formSelector, inputSelector, inputValidClass, inputErrorClass, submitButtonSelector, inactiveButtonClass, activeButtonClass, errorClass}) => {
        const forms = Array.from(document.querySelectorAll(formSelector));
        forms.forEach((formElement) => {
            formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });

            const inputs = Array.from(document.querySelectorAll(inputSelector));
            const buttonSubmit = formElement.querySelector(submitButtonSelector);


            inputs.forEach((inputElement) => {
                inputElement.addEventListener('input', (evt) => {
                    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

                    if(inputElement.validity.valid) {
                        inputElement.classList.remove(inputErrorClass);
                        inputElement.classList.add(inputValidClass);
                        errorElement.textContent = '';
                        errorElement.classList.remove(errorClass);
                    } else {
                        inputElement.classList.add(inputErrorClass);
                        inputElement.classList.remove(inputValidClass);
                        errorElement.textContent = inputElement.validationMessage;
                        errorElement.classList.add(errorClass);
                    }

                    const isFormValid = inputs.some((inputElement) => !inputElement.validity.valid);
                    if (isFormValid) {
                        buttonSubmit.classList.add(activeButtonClass);
                        buttonSubmit.classList.remove(inactiveButtonClass);
                        buttonSubmit.disabled = false;
                    } else {
                        buttonSubmit.classList.remove(activeButtonClass);
                        buttonSubmit.classList.add(inactiveButtonClass);
                        buttonSubmit.disabled = true;
                    };
                });
            });
        });    
};

enableValidation(object);