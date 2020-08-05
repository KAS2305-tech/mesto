const buttonEdit = document.querySelector('.profile__button-edit');
const popupClose = document.querySelector('.popup__button-close');
const overlay = document.querySelector('.popup__overlay');
const editPopup = document.getElementById('popup-edit');
const popupCard = document.getElementById('popup__card');
const popupImg = document.querySelector('.popup__img');
const popupImgClose = document.querySelector('.popup__img-close');
const buttonImg = document.querySelector('.card-item');
const buttonAdd = document.querySelector('.profile__button-add');
const popupCloseAdd = document.querySelector('.button-add');
const addSubmit = document.querySelector('.button-add-submit');
const formAdd = document.getElementById('popup__body_a');
const popupImgBig = document.querySelector('.popup__img');
const nameInput = document.getElementById('name');
const profileName =  document.querySelector('.profile__info-name');
const jobInput = document.getElementById('job');
const profileJob =  document.querySelector('.profile__info-job');
const cardLikeBtn = document.querySelector('.element__button');  
const cardImage = document.querySelector('.element__img');
const cardTitle = document.querySelector('.element__title');
const bigImageTitle = popupImgBig.querySelector('.popup__title-img');
const bigImage = popupImgBig.querySelector('.popup-card__content-img');
const bigImageTest = popupImgBig.querySelector('.big__img-test');

//ПОПАП ОБЩИЙ
  function openPopup(popupElement) {
    popupElement.classList.add('popup_active');    
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

//ПОПАП ЗАКРЫТИЕ ОБЩИЙ
function closePopup(popupElement) {
  popupElement.classList.remove('popup_active');
}
  popupClose.addEventListener('click', function () {
  closePopup(editPopup);
});
  popupCloseAdd.addEventListener('click', function () {
  closePopup(popupCard);  
});
//ПОПАП ЗАКРЫТИЕ ОБЩИЙ КОНЕЦ

//ФОРМА ДОБАВЛЕНИЯ КАРТОЧКИ
const formContent = document.querySelector('.popup-card_mesto');//новый селектор
const placeInput = formContent.querySelector('.popup__input-name');
const urlInput = formContent.querySelector('.popup__input-link');

function formSubmitCard (evt) {
    evt.preventDefault(); 
    
    renderCard({name:placeInput.value, link:urlInput.value});    
    closePopup(popupCard);   
}

formContent.addEventListener('submit', formSubmitCard);
//ФОРМА ДОБАВЛЕНИЯ КАРТОЧКИ КОНЕЦ

const formElement = document.getElementById('popup__body_b');
//const formElement = document.querySelector('.popup__body');
function formSubmitHandler (evt) {
    evt.preventDefault();
    const nameInput = document.getElementById('name');
    const jobInput = document.getElementById('job');
    const profileName =  document.querySelector('.profile__info-name');
    const profileJob =  document.querySelector('.profile__info-job');
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(editPopup);
}
formElement.addEventListener('submit', formSubmitHandler);
//ОТПРАВКА ФОРМЫ КОНЕЦ

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
  const cardTemplate = document.querySelector('.card-item').content.querySelector('.element');
  const list = document.querySelector('.elements');

  initialCards.forEach((data) =>{
    renderCard(data);
})

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
      bigImageTest.src = cardImage.src;
      openPopup(popupImg);//ПОПАП КАРТИНКИ
    });

    cardDeleteBtn.addEventListener('click',()=>{
      handleDeleteClick();//КНОПКА УДАЛЕНИЯ
    });

    function handleDeleteClick(){  
      const delItem = cardDeleteBtn.closest('.element');//селектор родителя который нужно удалить
      delItem.remove();
    }
    return cardElement;    
    }


    

  function renderCard(cardElement) {      
    list.prepend(createCard (cardElement));
  }

    const imagePopupTitle = document.querySelector('.popup__title-img');
    const imagePopupBig = document.querySelector('.popup-card__content-img');
    

  function handleImageClick(data){ //подтягивание большой картинки
    imagePopupTitle.textContent = data.name;
    imagePopupBig.style.backgroundImage = `url($(data.link))`;
  }

popupImgClose.addEventListener('click',()=>{
  closePopup(popupImg);//ПОПАП КАРТИНКИ
});




