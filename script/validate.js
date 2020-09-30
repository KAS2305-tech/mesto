 
const showInputError = (formElement, inputElement, errorMessage) => {  //показывает ошибку
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_invalid');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_visible');    
};

const hideInputError = (formElement, inputElement) => {  //убрать ошибку
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_invalid');
    errorElement.classList.remove('popup__error_visible');
    errorElement.textContent = '';
};

const hasInvalidInput = (inputlist) => { //
    return inputlist.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement) => {   //вкл-выкл кнопки 
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
    }
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {  //навешивание слушателей
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));      
    const buttonElement = formElement.querySelector('.popup__button-submit'); //изменил  
    inputList.forEach((inputElement) => {    
        inputElement.addEventListener('input', function () { 
            
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });    
};

const enableValidation = () => {    //функция валидации
        formElement.addEventListener('submit', function (evt) { 
            evt.preventDefault();
        });

    const fieldSetList = Array.from(document.querySelectorAll('.popup')); //слушатели папапа
        fieldSetList.forEach((fieldSet) => {
            setEventListeners(fieldSet);
        });
};

const removeErrors = () => {

    const errors = Array.from(document.querySelectorAll('.popup__error'));
    errors.forEach(item => {
        item.classList.remove('popup__error_visible');
        item.textContent = null;
    });
    const errorLine = Array.from(document.querySelectorAll('.popup__input'));
    errorLine.forEach(item => {
      item.classList.remove('popup__input_invalid');
    });
  };

enableValidation({     //вызов функции валидации
        formElement: '.popup__body', //изменил//
        inputElement: '.popup__input', //изменил//
        inputErrorClass: '.popup__input_invalid', //класс для инпута при неактивности
        buttonElement: '.popup__button-submit', //изменил
        inactiveButtonClass: '.popup__button_disabled', //добавить класс
        errorClass: 'popup__error_visible'  //добавить класс
      }); //запуск валидации