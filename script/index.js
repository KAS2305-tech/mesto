import { Card } from './Card.js';
import { settings, FormValidator } from './FormValidator.js';

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
const popupClose = document.querySelector('.popup__button-close');
const editPopup = document.getElementById('popup-edit');
const popupCard = document.getElementById('popup__card');
const popupImgBig = document.querySelector('.popup_img');
const popupImgClose = document.querySelector('.popup__img-close');
const buttonAdd = document.querySelector('.profile__button-add');
const popupCloseAdd = document.querySelector('.button-add');
const formAdd = document.getElementById('popup__body_mesto');
const nameInput = document.getElementById('name');
const profileName =  document.querySelector('.profile__info-name');
const jobInput = document.getElementById('job');
const profileJob =  document.querySelector('.profile__info-job');
const bigImageTitle = popupImgBig.querySelector('.popup__title-img');
const bigImageCard = document.getElementById('big__img-card');
const formContent = document.querySelector('.popup_mesto');
const placeInput = formContent.querySelector('.popup__input-mesto-name');
const urlInput = formContent.querySelector('.popup__input-link');
const formElement = document.getElementById('popup__body_edit');
const cardTemplate = document.querySelector('.card-item').content.querySelector('.element');
const list = document.querySelector('.elements');
const imagePopupTitle = document.querySelector('.popup__title-img');
const imagePopupBig = document.querySelector('.popup__content-img');
const btnElement = document.querySelector('.btn-submit');

/////////////////////////////////////////////////////////////
const editForm = editPopup.querySelector('.popup__edit');
const validationEdit = new FormValidator(settings, editForm);
validationEdit.enableValidation();

const addPopup = document.querySelector('.popup_mesto'); 
const addForm = addPopup.querySelector('.popup__add');
const validationAdd = new FormValidator(settings, addForm);
validationAdd.enableValidation();
/////////////////////////////////////////////////////////////

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


//ПОПАП ОБЩИЙ
function openPopup(popupElement) {
  popupElement.classList.add('popup_active'); 

  popupElement.addEventListener('click', overlayClose);
  document.addEventListener('keydown', escClose);
}

  buttonEdit.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  openPopup(editPopup);
});

  buttonAdd.addEventListener('click', function () {
  formAdd.reset();
  openPopup(popupCard);    
});
//ПОПАП ОБЩИЙ КОНЕЦ

//закрытие попапов
function closePopup(popupElement) {
  document.querySelector('.popup__body').reset(); //сброс
  removeErrors ();
  popupElement.classList.remove('popup_active');  
  btnElement.setAttribute("disabled", "true"); //сброс кнопки
};

  popupClose.addEventListener('click', function () {
  closePopup(editPopup);
});
  popupCloseAdd.addEventListener('click', function () {
  closePopup(popupCard);  
});
  popupImgClose.addEventListener('click',()=>{
  closePopup(popupImgBig);//ПОПАП КАРТИНКИ
});

const overlayClose = document.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('popup_active')) {  
    closePopup(document.querySelector('.popup_active'));
  };
 document.removeEventListener('click', overlayClose);
});

const escClose = (evt) => {
  const popupElement = document.querySelector('.popup_active')
  if (evt.key === "Escape") {
    closePopup(popupElement);
          };
  document.removeEventListener('keydown', escClose);
};

function formSubmitCard (evt) { //переношу
  evt.preventDefault(); 
  
  renderCard({name:placeInput.value, link:urlInput.value});    
  closePopup(popupCard);   
}

formContent.addEventListener('submit', formSubmitCard);
//ФОРМА ДОБАВЛЕНИЯ КАРТОЧКИ КОНЕЦ
function handleImageClick(data){ //подтягивание большой картинки
imagePopupTitle.textContent = data.name;
imagePopupBig.style.backgroundImage = `url($(data.link))`;
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editPopup);
}
formElement.addEventListener('submit', formSubmitHandler);
//ОТПРАВКА ФОРМЫ КОНЕЦ

function createCard (data) {  
  const cardElement = cardTemplate.cloneNode(true);    
  const cardLikeBtn = cardElement.querySelector('.element__button');
  const cardDeleteBtn = cardElement.querySelector('.element__trash'); 
  const cardImage = cardElement.querySelector('.element__img');
  const cardTitle = cardElement.querySelector('.element__title');

  cardTitle.textContent = data.name;  //маленькие карточки
  cardImage.src = data.link;

  cardLikeBtn.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button-active');
  });
  
  cardImage.addEventListener('click',()=>{
    bigImageTitle.textContent = data.name;
    bigImageCard.src = cardImage.src;
    openPopup(popupImgBig);//ПОПАП КАРТИНКИ
  });

  cardDeleteBtn.addEventListener('click',()=>{
    const delItem = cardDeleteBtn.closest('.element');//селектор родителя который нужно удалить
    delItem.remove();
  });
  
  
  return cardElement;    
  }


initialCards.forEach((data) =>{
  renderCard(data);
});

function renderCard(cardElement) {      
list.prepend(createCard (cardElement));
}

