export class Popup {
    constructor (popupSelector) {
        this._popupContainer = document.querySelector(popupSelector);
        this.closeButton = this._popupContainer.querySelector('.popup__button-close');
        this._escClose = this._handleEscClose.bind(this);
    }

    open() { //открытие
        if(!this._popupContainer.classList.contains('popup_active')) {
            this._popupContainer.classList.add('popup_active');
            document.addEventListener('keydown', this._escClose); //навешивание слушателя для закрытия по Esc
        }
    }

    close() { //закрытие
        if(this._popupContainer.classList.contains('popup_active')) {
            this._popupContainer.classList.remove('popup_active');
            document.removeEventListener('keydown', this._escClose); //удаление слушателя
        }
    }

    _handleOverlayClose(evt) { //закрытие 
        if (evt.target.classList.contains('popup_active')) {
            this.close();
        }
    }

    _handleEscClose(evt) { //закрытие
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() { //навешивание слушателя на кнопку
        this.closeButton.addEventListener('click', () => {
            this.close()
        });
        this._popupContainer.addEventListener('click', (evt) => {
            this._handleOverlayClose(evt)
        });
    }
}