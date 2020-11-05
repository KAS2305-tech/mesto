import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor (popupSelector, callbackSubmit) {
        super(popupSelector);
        this._callbackSubmit = callbackSubmit;
        this.inputs = this._popupContainer.querySelectorAll('input');
        this.form = this._popupContainer.querySelector('form');
        this._submitButton = this._popupContainer.querySelector('.popup__button-submit');
    }

    _getInputValues() { //сбор данных
        const _formValues = {};
        this.inputs.forEach (input => {
            _formValues [input.id] = input.value;
        })

        return _formValues;
    }

    setSubmitHandler(callbackSubmit) { ///???
        this._callbackSubmit = callbackSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const items = this._getInputValues();
            this._callbackSubmit(items);
        } )
    }

    close() {
        super.close();
        this.inputs.forEach(input => {
            input.value = ' ';
        })
    }

}