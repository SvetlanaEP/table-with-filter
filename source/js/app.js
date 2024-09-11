// Открытие/закрытие блока с выбором типа заведения и региона

//document.querySelector('.other-tabs').classList.add('other-tabs_active');
document.querySelector('#id19').classList.add('third-panel__tab_active');

//document.querySelector('.mobile-menu-mini').style.display = 'none';
//document.querySelector('.mobile-menu-mini-wrapper').classList.remove('mobile-menu-mini-wrapper_active')
if (document.querySelector('.mobile-menu-mini-wrapper')) {
    document.querySelector('.mobile-menu-mini-wrapper').classList.remove('mobile-menu-mini-wrapper_active')
    document.querySelector('.mobile-menu-mini').style.display='none'

}

let filterContent = document.querySelectorAll('.filter-educations__content');
let filterButton = document.querySelectorAll('.filter-educations__description');
let filterChooseButton = document.querySelectorAll('.filter-educations__button');


for (let i=0; i < filterButton.length; i++) {
    filterButton[i].addEventListener('click', () => {
        if (filterContent[i].classList.contains('filter-educations__content--none')) {
            openBlock(filterButton[i], filterContent[i])

        } else {
            closeBlock(filterButton[i], filterContent[i])
        }

    })
}

for (let i=0; i < filterChooseButton.length; i++) {
    filterChooseButton[i].addEventListener('click', () => {
        closeBlock(filterButton[i], filterContent[i])
    })
}


function openBlock(button, block) {
    block.classList.remove('filter-educations__content--none');
    button.querySelector('.select-icons__arrow').classList.add('select-icons__arrow--open')

    button.style.border = '2px solid #00B0D9';
    button.style.color = '#202020';
}

function closeBlock(button, block)  {
    button.style.border = '1px solid #C1C1C1';
    button.querySelector('.select-icons__arrow').classList.remove('select-icons__arrow--open')

    block.classList.add('filter-educations__content--none');
    button.style.color = '#7D7D7D';
}

// Для обновления счетчика выбранных инпутов !!!!!!!!пока только на одном блоке!!!!!

document.addEventListener('DOMContentLoaded', function () {
    const filterBlocks = document.querySelectorAll('.filter-educations__item')


    for (let i = 0; i < filterBlocks.length; i++) {
        const clearCheckboxes = filterBlocks[i].querySelector('.select-icons__del')

        const checkboxes = filterBlocks[i].querySelectorAll('.filter-educations__input');
        const selectedCountElement = filterBlocks[i].querySelector('.filter-educations__count');

        let countText = filterBlocks[i].querySelector('.filter-educations__selected')
        let countText0 = filterBlocks[i].querySelector('.filter-educations__selected-0')
        let countIconDel = filterBlocks[i].querySelector('.select-icons__del');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                let selectedCount = filterBlocks[i].querySelectorAll('.filter-educations__input:checked').length;

                if (selectedCount > 0) {
                    countText.classList.remove('visually-hidden')
                    countIconDel.classList.remove('visually-hidden')

                    countText0.classList.add('visually-hidden')
                    selectedCountElement.textContent = selectedCount;

                } else {
                    countText.classList.add('visually-hidden')
                    countIconDel.classList.add('visually-hidden')
                    countText0.classList.remove('visually-hidden')

                }

            })
        })

        clearCheckboxes.addEventListener('click', (evt) => {
            evt.stopPropagation()
            const selectedCheckboxes = filterBlocks[i].querySelectorAll('.filter-educations__input:checked')
            selectedCheckboxes.forEach((checkbox) => {
                checkbox.checked = false;

                selectedCountElement.textContent = '0';
                countText.classList.add('visually-hidden')
                countText0.classList.remove('visually-hidden')
                countIconDel.classList.add('visually-hidden')
            })

        })

    }
})

// Открытие формы для добавления данных

const addForm = document.querySelector('.add-data');
const addButton = document.querySelector('.soft-bar__container--add');
const addCloseButton = addForm.querySelector('.popup-form__close');
const addCancelButton = addForm.querySelector('.popup-form__button--cancel')

function openPopup(form) {

    form.classList.remove('popup-form--closed')
    document.getElementById('overlay').style.display = 'block';
    document.body.classList.add('modal-open');
}
function closePopup(form) {
    const textareaList = form.querySelectorAll('textarea')
    const iconClose = form.querySelectorAll('.clear-icon__del')

    textareaList.forEach(textarea => {
        textarea.value = ''
    })

    iconClose.forEach(icon => {
        icon.style.display = 'none'
    })

    form.classList.add('popup-form--closed')
    document.getElementById('overlay').style.display = 'none';
    document.body.classList.remove('modal-open');
}

addButton.addEventListener('click', () => {

    if (addForm.classList.contains('popup-form--closed')) {
        addForm.classList.remove('popup-form--closed')
        document.getElementById('overlay').style.display = 'block';
        document.body.classList.add('modal-open');
    }
})

addCloseButton.addEventListener('click', () => {
    if (!addForm.classList.contains('popup-form--closed')) {
        closePopup(addForm)
    }
})

addCancelButton.addEventListener('click', () => {
    if (!addForm.classList.contains('popup-form--closed')) {
        closePopup(addForm)
    }
})


// Про иконку-крестик в инпутах

const formInput = document.querySelectorAll('.input-item');
const clearIcon = document.querySelectorAll('.clear-icon');

console.log(formInput)

console.log(clearIcon)

for (let i=0; i<formInput.length; i++) {

    formInput[i].addEventListener('input', function() {
        if (formInput[i].value.length > 0) {
            clearIcon[i].style.display = 'block';
        } else {
            clearIcon[i].style.display = 'none';
        }
    });

    clearIcon[i].addEventListener('click', function() {
        formInput[i].value = '';
        clearIcon[i].style.display = 'none';
        formInput[i].focus(); // Вернем фокус на инпут после очистки
    });
}

// Текущая дата

const dateElement = document.querySelector('#admin-info__current-date')

const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
})

dateElement.textContent = formattedDate;

/* Экспорт */
/*
document.getElementById('exportButton').addEventListener('click', function() {
    function tableToCSV(table) {
        const rows = Array.from(table.querySelectorAll('tr'));

        // Функция для экранирования значений CSV
        const escapeCSV = (text) => {
            return `"${text.replace(/"/g, '""')}"`;
        };

        return rows
            .filter(row => !row.querySelector('input')) // Исключаем строки, содержащие input
            .map(row => {
                const cells = Array.from(row.querySelectorAll('td, th'))
                    .filter(cell => !cell.classList.contains('data-item__only-mobile')) // Исключаем ячейки с классом 'data-item__only-mobile'
                    .map(cell => escapeCSV(cell.textContent.trim())); // Экранирование текста и удаление лишних пробелов
                return cells.join(','); // Объединение ячеек в одну строку, разделенную запятыми
            })
            .join('\n'); // Объединение строк в один CSV
    }

    function downloadCSV(csv, filename) {
        const BOM = '\uFEFF';
        const csvFile = new Blob([BOM + csv], { type: 'text/csv; charset=utf-8;' });
        const downloadLink = document.createElement('a');

        downloadLink.download = filename;
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = 'none';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    const table = document.getElementById('table');
    const csv = tableToCSV(table);
    downloadCSV(csv, 'table-data.csv');
});



 */

// Получение элементов
const customSelectButton = document.querySelector('.soft-bar__button');
const customSelectList = document.getElementById('custom-select-list');
const customSelectItems = customSelectList.querySelectorAll('div');

// Открытие/закрытие выпадающего списка
customSelectButton.addEventListener('click', () => {
    customSelectButton.parentElement.classList.toggle('open');
});

// Обработка выбора элемента списка
customSelectItems.forEach(item => {
    item.addEventListener('click', () => {
        customSelectButton.textContent = item.textContent;
        customSelectButton.setAttribute('data-value', item.getAttribute('data-value'));
        customSelectButton.parentElement.classList.remove('open');
    });
});

// Закрытие выпадающего списка при клике вне его
document.addEventListener('click', (e) => {
    if (!customSelectButton.contains(e.target)) {
        customSelectButton.parentElement.classList.remove('open');
    }
});

// Убрать подсказку с кнопки "тип организации" при открытии выпадающего списка

