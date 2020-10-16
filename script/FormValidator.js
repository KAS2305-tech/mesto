export const settings = {  ///???
    formField: '.popup',
    formElement: '.popup__body',
    inputElement: '.popup__input',
    inputErrorClass: '.popup__input_invalid',
    buttonElement: '.popup__button-submit',
    inactiveButtonClass: '.popup__button_disabled',
    errorClass: 'popup__error_visible'
}


export class FormValidator { //проверить все
    constructor (settings, formField) {
        this._formField = formField;
        this._formElement = settings.formElement;
        this._inputElement = settings.inputElement;
        this._inputErrorClass = settings.inputErrorClass;
        this._buttonElement = settings.buttonElement;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._errorClass = settings.errorClass;
    }

    _showInputError = (inputElement, errorMessage) => {  //done
        const errorElement = this._formField.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);    
    } 
  
    _hideInputError = (inputElement) => {  //done
        const errorElement = this._formField.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _hasInvalidInput = (inputlist) => { //done
        return inputlist.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState = (inputList, buttonElement) => {   //done
        if (this._hasInvalidInput(inputList)) {
            buttonElement.disabled = true;
        } else {
            buttonElement.disabled = false;
        }
    }

    _checkInputValidity = (inputElement) => { //done
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    } 

    _setEventListeners () {  //навешивание слушателей  
        const inputList = Array.from(this._formField.querySelectorAll(this._inputElement));    
        const buttonElement = this._formField.querySelector(this._buttonElement);
        inputList.forEach((inputElement) => {    
            inputElement.addEventListener('input', () => { 
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });    
    } 
 
    enableValidation () {
        const fieldSet = (evt) => {
            evt.preventDefault();
        };
        this._formField.addEventListener('submit', fieldSet);
        this._setEventListeners(this._formField);        
        }
}
