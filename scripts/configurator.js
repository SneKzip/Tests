$(document).ready(() =>{
    let counter = 0;
    const addEmptyCard = () => {
        counter++;
        let quest = 
        `
        <div data-id = ${counter} class = "card">
            <div class = "title">
                <div class="title__input field field_v1">
                  <label for="first-name" class="ha-screen-reader">Вопрос</label>
                  <input id="first-name" class="field__input" placeholder="Например: какой сейчас год?">
                  <span class="field__label-wrap" aria-hidden="true">
                    <span class="field__label">Вопрос</span>
                  </span>
                </div>
            </div>
            <div class = "card-body-text">
                <form data-id = "${counter}" class = "header">
                    <p class = "header__answer"><input class = "header__radio" name = "quest${counter}" type = "radio"><input class = "answer" placeholder = "Ответ" type = "text"></p>
                    <p class = "header__answer"><input class = "header__radio" name = "quest${counter}" type = "radio"><input class = "answer" placeholder = "Ответ" type = "text"></p>
                    <p class = "header__answer"><input class = "header__radio" name = "quest${counter}" type = "radio"><input class = "answer" placeholder = "Ответ" type = "text"></p>
                </form>
                <div class = "buttons">
                    <input data-id = "${counter}" type = "button" class = "radio__add" value = "Добавить поле с ответом">
                    <input data-id = "${counter}" type = "button" class = "radio__remove" value = "Удалить поле с ответом">
                </div>
            </div>
        </div>
        `;
        $(".content-main").append(quest);
    };

    $(".content__button").on("click", (event) => {
        $(".content__text").hide();
        addEmptyCard();
    });
    $('body').on('click',".radio__add", function(event) {
        let forms = $(".header");
        $.each(forms, (index, value) => {
            if(value.dataset.id == event.target.dataset.id){
                let counterCopy = event.target.dataset.id;
                let radio = 
                `
                    <p class = "header__answer"><input class = "header__radio" name = "quest${counterCopy}" type = "radio"><input class = "answer" placeholder = "Ответ" type = "text"></p>
                `;
                $(value).append(radio);
            }
        })
    });
    $('body').on('click',".radio__remove", function(event) {
        let forms = $(".header");
        $.each(forms, (index, value) => {
            if(value.dataset.id == event.target.dataset.id){
                $(value).children().last().remove();
            }
        })
    });
    
});