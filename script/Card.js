export class Card {
  constructor({name, link}, selector) {
    this._name = name;
    this._link = link;
    this._selector = selector;    
  }

  _getTemplate() { //создание новой карточки
    return document.querySelector('.card-item').content.querySelector('.element').cloneNode(true);
    //return cardElement;
  }

  _deleteHandler() { //удаление карточки
    this._element.remove();
  }

  _likeHandler() { //добавление лайка
    evt.target.classList.toggle('element__button-active');
  }
  _cardHandler() { //большая картинка
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__img').alt = this._name;
    this._element.querySelector('.element__img').src = this._link;
  }

  _setEventListeners () { //слушатели
    this._element.querySelector('.element__trash').addEventListener('click', () => this._deleteHandler()); //удаление
    this._element.querySelector('.element__button').addEventListener('click', () => this._likeHandler()); //лайк
    this._element.querySelector('.element__img').addEventListener('click', () => this._cardHandler()); //большая картинка
  }

  createElement() { //создание карточки
    this._element = this._getTemplate();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__img').src = this._link;
    this._setEventListeners();
    return this._element;
  }
}
