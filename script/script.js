let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__close');
let overlay = document.querySelector('.popup__overlay');
let popup = document.getElementById('popup');
let popupClose = document.querySelector('.popup__button-close');

//ФУНКЦИЯ ДЛЯ КНОПКИ РЕДАКТИРОВАНИЯ

function showClick() {
    popup.classList.add('popup_active');
    overlay.classList.add('popup_active');
}

buttonEdit.addEventListener('click', showClick);


//ФНКЦИЯ ДЛЯ КНОПКИ ЗАКРЫТИЯ

function closeClick() {
    popup.classList.remove('popup_active');
    overlay.classList.remove('popup_active');
}

popupClose.addEventListener('click', closeClick);


//ОТПРАВКА ФОРМЫ
// Находим форму в DOM
let formElement = document.querySelector('.popup__body');// Воспользуйтесь методом querySelector() +
let submit = document.querySelector('.submit');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM +
    let nameInput = document.querySelector('.popup__body-name'); // Воспользуйтесь инструментом .querySelector()
    let jobInput = document.querySelector('.popup__body-job'); // Воспользуйтесь инструментом .querySelector()
    
    // Получите значение полей из свойства value

    
    let profileName =  document.querySelector('.profile__info-name');
    let profileJob =  document.querySelector('.profile__info-job');// Выберите элементы, куда должны быть вставлены значения полей
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;   // Вставьте новые значения с помощью textContent
    closeClick();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
