import { Card } from './Card.js';
import { settings, FormValidator } from './FormValidator.js';

import { Section } from './Section.js'; //sprint 8 
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';

//МАССИВ КАРТОЧЕК
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];  
//МАССИВ КАРТОЧЕК КОНЕЦ
const buttonEdit = document.querySelector('.profile__button-edit');
const editPopup = document.getElementById('popup-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const nameInput = document.getElementById('name');
const profileName =  document.querySelector('.profile__info-name');
const jobInput = document.getElementById('job');
const profileJob =  document.querySelector('.profile__info-job');
const formContent = document.querySelector('.popup_mesto');
const placeInput = formContent.querySelector('.popup__input-mesto-name');
const urlInput = formContent.querySelector('.popup__input-link');
const formElement = document.getElementById('popup__body_edit');
const list = document.querySelector('.elements');
const btnElement = document.querySelector('.btn-submit'); 
const template = document.querySelector('.card-item');


/////////////////////////////////////////////////////////////ВАЛИДАЦИЯ //DONE
const editForm = editPopup.querySelector('.popup__edit');
const validationEdit = new FormValidator(settings, editForm);
validationEdit.enableValidation();

const addPopup = document.querySelector('.popup_mesto'); 
const addForm = addPopup.querySelector('.popup__add');
const validationAdd = new FormValidator(settings, addForm);
validationAdd.enableValidation();
////////////////////////////////////////////////


function removeErrors () {
  const errors = Array.from(formElement.querySelectorAll('.popup__error'));
  errors.forEach((item) => {
      item.classList.remove('popup__error_visible');
      item.textContent = null;
  });
  const errorLine = Array.from(formElement.querySelectorAll('.popup__input'));
  errorLine.forEach((item) => {
    item.classList.remove('popup__input_invalid');
  });
};    
/////////////////////////////////DONE
function saveCallback() {
  profileName.textContent = nameInput.value; 
  profileJob.textContent = jobInput.value; 
  formProfilePopup.close();
};

function addCallback() { //?
  const name = placeInput.value;
  const link = urlInput.value;
  const newCard = new Card (template, {name, link}, {handleCardClick: (name, link)=> 
    imagePopup.open({name, link})});
  const element = newCard.createElement();
  cardsList.addItem(element);  
  formCardPopup.close();
};

const imagePopup = new PopupWithImage('.popup_img'); //вызов картики
imagePopup.setEventListeners();

const formProfilePopup = new PopupWithForm('#popup-edit', saveCallback); //вызов формы профиля //DONE
formProfilePopup.setEventListeners();

buttonEdit.addEventListener ('click', ()=> { //DONE
  removeErrors ();
  formProfilePopup.open();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;  //поля формы
});

const formCardPopup = new PopupWithForm('.popup_mesto', addCallback); //вызов формы карточки //DONE
formCardPopup.setEventListeners();

buttonAdd.addEventListener ('click', ()=> {
  btnElement.setAttribute("disabled", "true");
  formCardPopup.open();
});

/////////////////////////////////
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(template, item, 
      {handleCardClick: (name, link)=> 
          imagePopup.open({name, link})});
    const element = card.createElement();
    cardsList.addItem(element);
  }
}, list
);
cardsList.renderItems();
