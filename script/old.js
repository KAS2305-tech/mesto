let buttonEdit = document.querySelector('.profile__button-edit');
let popupClose = document.querySelector('.popup__button-close');
let overlay = document.querySelector('.popup__overlay');
let editPopup = document.getElementById('popup-edit');
let popupCard = document.getElementById('popup__card');
let popupImg = document.querySelector('.popup__img');
let popupImgClose = document.querySelector('.popup__img-close');
let buttonImg = document.querySelector('.card-item'); //добавить при нажатии на картинку
let buttonAdd = document.querySelector('.profile__button-add');
let popupCloseAdd = document.querySelector('.button-add');
let addSubmit = document.querySelector('.button-add-submit');






//ПОПАП ОБЩИЙ
  function openPopup(popupElement) {
    popupElement.classList.add('popup_active');    
}  
    buttonEdit.addEventListener('click', function () {
    document.getElementById('name').value = document.querySelector('.profile__info-name').textContent;
    document.getElementById('job').value = document.querySelector('.profile__info-job').textContent;
    openPopup(editPopup);
});
    buttonAdd.addEventListener('click', function () {
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

let formElement = document.querySelector('.popup__body');
function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameInput = document.getElementById('name');
    let jobInput = document.getElementById('job');
    let profileName =  document.querySelector('.profile__info-name');
    let profileJob =  document.querySelector('.profile__info-job');
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(editPopup);
}
formElement.addEventListener('submit', formSubmitHandler);
//ОТПРАВКА ФОРМЫ КОНЕЦ

//ФОРМА ДОБАВЛЕНИЯ КАРТОЧКИ
let formContent = document.querySelector('.popup-card');
const placeInput = formContent.querySelector('.popup__input-name');
const urlInput = formContent.querySelector('.popup__input-link');


function formSubmitCard (evt) {
    evt.preventDefault(); 

    console.log(placeInput.value, urlInput.value);
    renderCard({name:placeInput.value, link:urlInput.value});    
    closePopup(popupCard);
}
formContent.addEventListener('submit', formSubmitCard);
//ФОРМА ДОБАВЛЕНИЯ КАРТОЧКИ КОНЕЦ

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

  function handleLikeClick(){
    /*  */
    //СОЗДАТЬ ФУНКЦИЮ ИЗМЕНЕНИЯ КЛАССА ДЛЯ КНОПКИ ЛАЙКА
  }
  

  function handleImageClick(){
  }

  function createCard (data) {  
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.element__img');
    const cardTitle = cardElement.querySelector('.element__title');
    const cardLikeBtn = cardElement.querySelector('.element__button');
    const cardDeleteBtn = cardElement.querySelector('.element__trash');

    const popupImgBig = document.querySelector('.popup__img');
    const bigImageTitle = popupImgBig.querySelector('.popup__title-img');
    const bigImage = popupImgBig.querySelector('.popup__content-img');
    ;

    cardLikeBtn.addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__button-active');
    });
      
    cardDeleteBtn.addEventListener('click',()=>{
      handleDeleteClick();//КНОПКА УДАЛЕНИЯ
    });

    function handleDeleteClick(){
     const delItem = cardDeleteBtn.closest('.element');//селектор родителя который нужно удалить
     delItem.remove();
    }

    cardImage.addEventListener('click',()=>{
      bigImageTitle.textContent = data.name;
      bigImage.style.backgroundImage = `url($(data.link))`;
      bigImage.src = data.link;
      openPopup(popupImg);//ПОПАП КАРТИНКИ
    });

    
    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    //cardImage.style.backgroundImage = `url($(data.link))`;
    
    return cardElement;    
    }


  function renderCard(data) {      
    list.prepend(createCard (data));
  }

  initialCards.forEach((data) =>{
      renderCard(data);
})

    const imagePopupTitle = document.querySelector('.popup__title-img');
    const imagePopupBig = document.querySelector('.popup__content-img');
    
  /* function handleImageClick(data){ //подтягивание большой картинки
    imagePopupTitle.textContent = data.name;
    imagePopupBig.textContent = data.link;
  } */



  function handleImageClick(data){ //подтягивание большой картинки
    imagePopupTitle.textContent = data.name;
    imagePopupBig.style.backgroundImage = `url($(data.link))`;
  }

popupImgClose.addEventListener('click',()=>{
  closePopup(popupImg);//ПОПАП КАРТИНКИ
});
