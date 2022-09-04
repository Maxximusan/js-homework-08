import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

// refs.form.addEventListener('input', onImput)
refs.form.addEventListener('submit', onFormSubmit);
// // refs.input.addEventListener('input', onInput);
refs.form.addEventListener('input', throttle(onFieldsInput, 500));

const KeyStorage = "feedback-form-state";
let formField = {};
populateForm();


function onFieldsInput(event) {
    // event.preventDefault();
    formField[event.target.name] = event.target.value;
    // console.log(event.target.name)
    // console.log(event.target.value)

    console.log(formField)

    localStorage.setItem(KeyStorage, JSON.stringify(formField));

};
function populateForm() {
    const saveMessages = localStorage.getItem(KeyStorage);
    const pharseMessages = JSON.parse(saveMessages);

    if (saveMessages) {
        // refs.form.value = pharseMessages.email || '' || pharseMessages.message;
        refs.textarea.value = pharseMessages.message || '';
        refs.input.value = pharseMessages.email || '';
        formField = pharseMessages;
    }

    // if (saveMessages) {

    // }
};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(KeyStorage);
    console.log(formField)
    formField = {};
};
// // Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
//  в которых сохраняй текущие значения полей формы.Пусть ключом для хранилища будет строка "feedback-form-state".

// // При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.
// В противном случае поля должны быть пустыми.

// // При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями
//  в консоль.

// // Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.Для этого добавь в проект и 
// используй библиотеку lodash.throttle.