let buttonEdit = document.querySelector('.profile__button_edit');
let buttonClose = document.querySelector('.popup__close');
let overlay = document.querySelector('.overlay');
let popup = document.getElementById('popup');
let popupClose = document.querySelector('.popup__close');

//ФУНКЦИЯ ДЛЯ КНОПКИ РЕДАКТИРОВАНИЯ

function showClick() {
    popup.classList.add('active');
    overlay.classList.add('active');
}

buttonEdit.addEventListener('click', showClick);


//ФНКЦИЯ ДЛЯ КНОПКИ ЗАКРЫТИЯ

function closeClick() {
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

popupClose.addEventListener('click', closeClick);


//ОТПРАВКА ФОРМЫ
