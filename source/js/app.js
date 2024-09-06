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
