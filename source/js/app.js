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

function openPopup(form) {
    form.classList.remove('popup-form--closed')
    document.getElementById('overlay').style.display = 'block';
    document.body.classList.add('modal-open');
}
function closePopup(form) {
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
        addForm.classList.add('popup-form--closed')
        document.getElementById('overlay').style.display = 'none';
        document.body.classList.remove('modal-open');
    }
})


// Про иконку-крестик в инпутах

const formInput = document.querySelectorAll('.input-item');
const clearIcon = document.querySelectorAll('.clear-icon');

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

// Открыть форму для редактирования

document.addEventListener('DOMContentLoaded', function() {
    let currentRow;

    const buttonEdit = document.querySelectorAll('.data-item__button--edit');
    const editPopup = document.querySelector('.edit-data');
    const closeEditForm = editPopup.querySelector('.popup-form__close');
    const cancelButtonEditForm = editPopup.querySelector('.popup-form__button--cancel');

    const textareaList = editPopup.querySelectorAll('textarea')

    const fullNameTextarea = document.querySelector('#edit-full-name');
    const shortNameTextarea = document.querySelector('#edit-abb-name');

buttonEdit.forEach(button => {
    button.addEventListener('click', function () {
        currentRow = this.closest('tr')
        const fullNameText = currentRow.querySelector('#data-full-name').textContent.trim();
        const shortNameText = currentRow.querySelector('#data-short-name').textContent.trim();

        fullNameTextarea.value = fullNameText;
        shortNameTextarea.value = shortNameText

        textareaList.forEach(textarea => {
            if (textarea.value.length > 0) {
                textarea.closest('div').querySelector('.clear-icon')
                    .style.display = 'block';
            }
        })

        openPopup(editPopup)
    })
})

    closeEditForm.addEventListener('click', () => {
        closePopup(editPopup)

        textareaList.forEach(textarea => {
            textarea.value = ''
        })
    })

    cancelButtonEditForm.addEventListener('click', () => {
        closePopup(editPopup)

        textareaList.forEach(textarea => {
            textarea.value = ''
        })
    })

    /* Ф-я для обновления данных в табл */
    const editDataButton = document.querySelector('#popup-form-edit');

    editDataButton.addEventListener('click', (evt) => {
        evt.preventDefault()

        if (fullNameTextarea.value && shortNameTextarea.value) {
            const editedFullName = fullNameTextarea.value.trim()
            const fullNameCell = currentRow.querySelector('#data-full-name')

            fullNameCell.textContent = editedFullName.charAt(0).toUpperCase() + editedFullName.slice(1).toLowerCase();


            const editedShortName = shortNameTextarea.value.trim()
            const shortNameCell = currentRow.querySelector('#data-short-name')

            shortNameCell.textContent = editedShortName.charAt(0).toUpperCase() + editedShortName.slice(1);

            closePopup(editPopup)
        }
    })
})


