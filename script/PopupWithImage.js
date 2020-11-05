import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this.imageTitle = this._popupContainer.querySelector('.popup__title-img');
        this.imageBig = this._popupContainer.querySelector('#big__img-card');
    }

    open ({name, link}) {
        super.open();
        this.imageTitle.textContent = name;
        this.imageBig.src = link;
        this.imageBig.alt = name;
    }
}