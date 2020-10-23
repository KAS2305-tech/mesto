export class Card {
  constructor({name, link}, cardTemplate, openImagePopup) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;  
    this._openImagePopup = openImagePopup;      
  }
  

  _getTemplate() { //создание новой карточки
    return document.querySelector('.card-item').content.querySelector('.element').cloneNode(true);
  }

  _deleteHandler() { //удаление карточки
    this._element.remove();
  }

  _likeHandler(evt) { //добавление лайка
    evt.target.classList.toggle('element__button-active');
  }
  _cardHandler() { //
    this._openImagePopup( this._name, this._link);
  }

  _setEventListeners () { //слушатели
    this._element.querySelector('.element__trash').addEventListener('click', () => this._deleteHandler()); //удаление
    this._element.querySelector('.element__button').addEventListener('click', (evt) => this._likeHandler(evt)); //лайк
    this._elementImg.addEventListener('click', () => this._cardHandler()); //большая картинка
  }

  createElement() { //создание карточки
    this._element = this._getTemplate();
    this._elementImg = this._element.querySelector('.element__img');
    this._element.querySelector('.element__title').textContent = this._name;
    this._elementImg.alt = this._name;
    this._elementImg.src = this._link;
    this._setEventListeners();
    
    return this._element;
  }
}
