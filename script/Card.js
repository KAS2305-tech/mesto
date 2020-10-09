//создать класс Card
export class Card {
    constructor ( data ) {
        this.data = data;
        this.templateSelector = templateSelector;

    }

    _setEventListeners () {  //установка слушателей
        this.elLike.addEventListener('click', (evt) => { //слушатель лайка
            this._cardLikeBtn(evt);
        });

        this.elImg.addEventListener('click', (evt) => { //слушатель большой картинки
            this.handreImage(this.data);
        });

        this.elDelete.addEventListener('click', (evt) => { //слушатель удаления карточки
            this._cardDeleteBtn(evt);
        });
    }

    _getTemplate() {
        const template = document.querySelector(this.templateSelector);
        return template.content.cloneNode(true);
    }

    getCard() {
        const elCard = this._getTemplate();
        this.elLike = elCard.querySelector('.element__button');
        this.elImg = elCard.querySelector('.element__img');
        this.elDelete = elCard.querySelector('.element__trash');
    }

    

    // function createCard (data) {  
    //     const cardElement = cardTemplate.cloneNode(true);    
    //     const cardLikeBtn = cardElement.querySelector('.element__button');
    //     const cardDeleteBtn = cardElement.querySelector('.element__trash'); 
    //     const cardImage = cardElement.querySelector('.element__img');
    //     const cardTitle = cardElement.querySelector('.element__title');
    
    //     cardTitle.textContent = data.name;  //маленькие карточки
    //     cardImage.src = data.link;
    
    //     cardLikeBtn.addEventListener('click', function (evt) {
    //       evt.target.classList.toggle('element__button-active');
    //     });
        
    //     cardImage.addEventListener('click',()=>{
    //       bigImageTitle.textContent = data.name;
    //       bigImageCard.src = cardImage.src;
    //       openPopup(popupImgBig);//ПОПАП КАРТИНКИ
    //     });
    
    //     cardDeleteBtn.addEventListener('click',()=>{
    //       const delItem = cardDeleteBtn.closest('.element');//селектор родителя который нужно удалить
    //       delItem.remove();
    //     });
        
        
    //       return cardElement;  
    //     }
    
    
    //   initialCards.forEach((data) =>{
    //     renderCard(data);
    // });
    
    // function renderCard(cardElement) {      
    //   list.prepend(createCard (cardElement));
    // }

}


 const test = console.log('экспорт из Card');
 export {test};