let buttonEdit = document.querySelector('.profile__button-edit');
let popupClose = document.querySelector('.popup__button-close');

let overlay = document.querySelector('.popup__overlay');
let popup = document.getElementById('popup');

//ПОПАП ОБЩИЙ
function openPopup(popupElement) {
  // ...
}

// эту функцию можно переиспользовать для разных попапов

editPopupButton.addEventListener('click', function () {
  openPopup(editPopup); // открываем попап редактирования
});

newItemPopupButton.addEventListener('click', function () {
  openPopup(newItemPopup); // открываем попап добавления
});
//ПОПАП ОБЩИЙ КОНЕЦ

//ФУНКЦИЯ ДЛЯ КНОПКИ РЕДАКТИРОВАНИЯ

function showClick() {

    // Получите значение полей из свойства value
    document.getElementById('name').value = document.querySelector('.profile__info-name').textContent; //ссылка на имя
    document.getElementById('job').value = document.querySelector('.profile__info-job').textContent;   //ссылка на работу

    popup.classList.add('popup_active');  //присваивание дополнительного класса
}

buttonEdit.addEventListener('click', showClick);  //запуск функции


//ФНКЦИЯ ДЛЯ КНОПКИ ЗАКРЫТИЯ

function closeClick() {
    popup.classList.remove('popup_active');  //удаление дополнительного класса
}

popupClose.addEventListener('click', closeClick);  //запуск функции


//ОТПРАВКА ФОРМЫ
// Находим форму в DOM
let formElement = document.querySelector('.popup__body');// Воспользуйтесь методом querySelector() +

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM +
    let nameInput = document.getElementById('name'); // Воспользуйтесь инструментом .querySelector()
    let jobInput = document.getElementById('job'); // Воспользуйтесь инструментом .querySelector()
    
    
    let profileName =  document.querySelector('.profile__info-name');
    let profileJob =  document.querySelector('.profile__info-job');// Выберите элементы, куда должны быть вставлены значения полей
    

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;   // Вставьте новые значения с помощью textContent
    closeClick();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);



//Кнопка добавления карточки
let popupCard = document.getElementById('popup__card');
let buttonAdd = document.querySelector('.profile__button-add');
let popupCloseAdd = document.querySelector('.button-add');
let addSubmit = document.querySelector('.button-add-submit');

function showClickAdd() {
    popupCard.classList.add('popup_active');  //присваивание дополнительного класса
}

buttonAdd.addEventListener('click', showClickAdd);  //запуск функции

function closeClickAdd() {
    popupCard.classList.remove('popup_active');  //удаление дополнительного класса
}

popupCloseAdd.addEventListener('click', closeClickAdd);  //запуск функции



//ДОБАВЛЕНИЕ КАРТОЧЕК НА СТРАНИЦУ 
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

  




  // ФУНКЦИЯ ЛАЙК
