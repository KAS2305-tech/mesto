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
// Находим форму в DOM
let formElement = // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = // Воспользуйтесь инструментом .querySelector()
    let jobInput = // Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
