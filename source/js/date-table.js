const dataList = [
    {
        id: 1,
        abbreviation: 'АНО',
        name: 'автономная некоммерческая организация'
    },
    {
        id: 2,
        abbreviation: 'АНОО',
        name: 'Автономное некоммерческое образовательная организация'
    },
    {
        id: 3,
        abbreviation: 'АНОО',
        name: 'АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОБЩЕОБРАЗОВАТЕЛЬНАЯ ОРГАНИЗАЦИЯ'
    },
    {
        id: 4,
        abbreviation: 'АО',
        name: 'Акционерное общество'
    },
    {
        id: 5,
        abbreviation: 'АО НПО',
        name: 'Акционерное общество'
    },
    {
        id: 6,
        abbreviation: 'АО НПФ',
        name: 'Акционерное общество'
    },
    {
        id: 7,
        abbreviation: 'АО ПКО',
        name: 'АКЦИОНЕРНОЕ ОБЩЕСТВО ПРОИЗВОДСТВЕННО-КОНСТРУКТОРСКОЕ ОБЪЕДИНЕНИЕ'
    },
    {
        id: 8,
        abbreviation: 'БФ',
        name: 'Благотворительный фонд'
    },
    {
        id: 9,
        abbreviation: 'Верхневолжский региональный филиал НПФ',
        name: 'Верхневолжский региональный филиал негосударственного пенсионного фонда'
    },
    {
        id: 10,
        abbreviation: 'Волжское МТУ по надзору за ЯРБ',
        name: 'Волжское межрегиональное территориальное управление по надзору за ядерной и радиационной безопасности'
    },
    {
        id: 11,
        abbreviation: 'ГАУ ДПО НО',
        name: 'Государственное образовательное учреждение дополнительного профессионального образования'
    },
    {
        id: 12,
        abbreviation: 'ГБОУ НПО',
        name: 'Государственное образовательное учреждение дополнительного профессионального образования'
    },
    {
        id: 13,
        abbreviation: 'ГБПОУ',
        name: 'Государственное бюджетное профессиональное образовательное учреждение'
    },
    {
        id: 14,
        abbreviation: 'ГБУ НО',
        name: 'Государственное бюджетное учреждение Нижегородской области'
    },
    {
        id: 15,
        abbreviation: 'ГБУЗ',
        name: 'Государственное бюджетное учреждение здравоохранения'
    },
    {
        id: 16,
        abbreviation: 'ГБУЗ НО',
        name: 'Государственное бюджетное учреждение здравоохранения Нижегородской области'
    },
    {
        id: 17,
        abbreviation: 'ГК',
        name: 'Гостиничный комплекс'
    },
    {
        id: 18,
        abbreviation: 'ГКОУ',
        name: 'Государственное казенное общеобразовательное учреждение'
    },
    {
        id: 19,
        abbreviation: 'ГНООУ Учебный центр',
        name: 'Государственное Нижегородское областное образовательное учреждение  Учебный центр'
    },
    {
        id: 20,
        abbreviation: 'Горьковский филиал ОАО',
        name: 'Горьковский филиал Открытого Акционерного Общества'
    },
    {
        id: 21,
        abbreviation: 'ГОУ',
        name: 'Государственное образовательное учреждение'
    },
    {
        id: 22,
        abbreviation: 'ГОУ ВПО',
        name: 'Государственное образовательное учреждение высшего профессионального образования'
    },
    {
        id: 23,
        abbreviation: 'ГОУ ДПО',
        name: 'Государственное образовательное учреждение дополнительного профессионального образования'
    },
    {
        id: 24,
        abbreviation: 'ГОУ НПО',
        name: 'Государственное образовательное учреждение начального профессионального образования'
    },
    {
        id: 25,
        abbreviation: 'ГП НО',
        name: 'Государственное Предприятие Нижегородской Области'
    },
    {
        id: 26,
        abbreviation: 'ГУ',
        name: 'ГЛАВНОЕ УПРАВЛЕНИЕ'
    },
    {
        id: 27,
        abbreviation: 'ГУЗ',
        name: 'Государственный университет по землеустройству'
    },
    {
        id: 28,
        abbreviation: 'ГУК',
        name: 'Государственное учреждение культуры'
    },
    {
        id: 29,
        abbreviation: 'ГУП',
        name: 'Государственное унитарное предприятие'
    },
    {
        id: 30,
        abbreviation: 'ГЭПП',
        name: 'Государственное энергетическое производственное предприятие'
    },
    {
        id: 31,
        abbreviation: 'ДКБ',
        name: 'ДОРОЖНАЯ КЛИНИЧЕСКАЯ БОЛЬНИЦА'
    },
    {
        id: 32,
        abbreviation: 'ЗАО',
        name: 'Закрытое Акцианерное Общество'
    },
    {
        id: 33,
        abbreviation: 'Избирательное объединение',
        name: 'Избирательное объединение'
    },
    {
        id: 34,
        abbreviation: 'ИП',
        name: 'Индивидуальный предприниматель'
    },
    {
        id: 35,
        abbreviation: 'КП',
        name: 'Комбинат питания'
    },
    {
        id: 36,
        abbreviation: 'Кредитный Потребительский Кооператив',
        name: 'Кредитный Потребительский Кооператив'
    },
    {
        id: 37,
        abbreviation: 'КФХ',
        name: 'Крестьянское фермерское хозяйство'
    },
    {
        id: 38,
        abbreviation: 'КЦ',
        name: 'Культурный центр'
    },
    {
        id: 39,
        abbreviation: 'МАДОУ',
        name: 'Муниципальное автономное дошкольное образовательное учреждение'
    },
    {
        id: 40,
        abbreviation: 'МБДОУ',
        name: 'МБДОУ'
    },
    {
        id: 41,
        abbreviation: 'МБУ',
        name: 'Муниципальное Бюджетное Учреждение'
    },
    {
        id: 42,
        abbreviation: 'МБУ ДО',
        name: 'Муниципальное Бюджетное Учреждение Дополнительного Образования'
    },
    {
        id: 43,
        abbreviation: 'МДОУ',
        name: 'Муниципальное дошкольное образовательное учрежение'
    },
    {
        id: 44,
        abbreviation: 'МКУ',
        name: 'Муниципальное казенное учреждение'
    },
    {
        id: 45,
        abbreviation: 'МЛПУ',
        name: 'Муниципальное лечебно-профилактическое учреждение'
    },
    {
        id: 46,
        abbreviation: 'МОУ',
        name: 'Муниципальное образовательное учрежение'
    },
    {
        id: 47,
        abbreviation: 'МП',
        name: 'Малое предприятие'
    },
    {
        id: 48,
        abbreviation: 'МП',
        name: 'Муниципальное предприятие'
    },
    {
        id: 49,
        abbreviation: 'МП города Нижнего Новгорода',
        name: 'Муниципальное предприятие города Нижнего Новгорода'
    },
    {
        id: 50,
        abbreviation: 'МУ',
        name: 'Муниципальное Управление'
    },
    {
        id: 51,
        abbreviation: 'МУК',
        name: 'Муниципальное учрежение культуры'
    },
    {
        id: 52,
        abbreviation: 'Муниципальное автономное учреждение культуры',
        name: 'Муниципальное автономное учреждение культуры'
    },
    {
        id: 53,
        abbreviation: 'Муниципальное автономное учреждение муниципальный центр',
        name: 'Муниципальное автономное учреждение культуры'
    },
    {
        id: 54,
        abbreviation: 'Муниципальное автономное учреждение муниципальный центр',
        name: 'Муниципальное автономное учреждение муниципальный центр'
    },
    {
        id: 55,
        abbreviation: 'МУП',
        name: 'Муниципальное унитарное предприятие'
    },
    {
        id: 56,
        abbreviation: 'НАО',
        name: 'Некоммерческое  акционерное общество'
    },
]

const rowTemplate = document.querySelector('#date-table').content.querySelector('.data-item');
const dateTableContainer = document.querySelector('#date-table-container')

// Ф-я для динамического вывода данных в табл
function generateTable(data) {

    const rowListFragment = document.createDocumentFragment()

    data.forEach((row) => {
        const rowElement = rowTemplate.cloneNode(true);

        rowElement.querySelector('#data-id').textContent = row.id;
        rowElement.querySelector('#data-full-name').textContent = row.name.charAt(0).toUpperCase() + row.name.slice(1).toLowerCase();
        rowElement.querySelector('#data-short-name').textContent = row.abbreviation;

        rowListFragment.appendChild(rowElement);
    });

    clearTable();
    dateTableContainer.appendChild(rowListFragment)

    updateTotalCount()

}

generateTable(dataList)

function updateTotalCount() {
    const totalCount = dateTableContainer.querySelectorAll('tr').length
    const totalCountSpan = document.querySelectorAll('.in-total-count')

    for (let i = 0; i < totalCountSpan.length; i++) {
        totalCountSpan[i].textContent = totalCount;
    }
}

// Ф-я для очистки табл

function clearTable() {
    while (dateTableContainer.firstChild) {
        dateTableContainer.removeChild(dateTableContainer.firstChild)
    }
}

function filterTable(columnIndex) {

    const input = document.querySelectorAll('.search-input')[columnIndex];
    const filter = input.value.toLowerCase().trim();

    // Фильтрация данных в колонке
    const filteredData = dataList.filter(row => {
        let textToCheck;

        if (columnIndex === 0) {
            textToCheck = row.name.toLowerCase();
        } else if (columnIndex === 1) {
                textToCheck = row.abbreviation.toLowerCase();
            }

        return textToCheck.startsWith(filter);
    })

    // Проверка: если нет данных для отображения, покажем сообщение или очистим таблицу
    if (filteredData.length === 0) {
        clearTable();
       /* const noDataMessage = document.createElement('tr');
        const noDataCell = document.createElement('td');
        noDataCell.colSpan = 3; // Подстраиваем под количество колонок
        noDataCell.textContent = 'Данные не найдены';
        noDataMessage.appendChild(noDataCell);
        dateTableContainer.appendChild(noDataMessage);*/
        return;
    }

    clearTable();
    generateTable(filteredData);

}

function showSuggestions(columnIndex) {
    const input = document.querySelectorAll('.search-input')[columnIndex];
    const filter = input.value.toLowerCase();

    const suggestionsList = columnIndex === 0 ?
        document.getElementById('name-suggestions-list') :
        document.getElementById('abbreviation-suggestions-list');

    suggestionsList.innerHTML = '';

    if (filter.length === 0) {
        suggestionsList.style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        document.body.classList.remove('modal-open');
        return;
    }

    /* Фильтр данных для подсказок */

    const filteredData = dataList.filter(row => {
        let textToCheck;

        if (columnIndex === 0) {
            textToCheck = row.name.toLowerCase();
        } else if (columnIndex === 1) {
            textToCheck = row.abbreviation.toLowerCase();
        }

        return textToCheck.split(' ').some(word => word.startsWith(filter));
    });

    /* убрать блок, если нет данных*/

    if (filteredData.length === 0) {
        suggestionsList.style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        document.body.classList.remove('modal-open');
        return;
    }

    // Добавление подсказок в список
    filteredData.forEach(row => {
        const li = document.createElement('li');
        li.textContent = columnIndex === 0 ? row.name : row.abbreviation;
        li.onclick = () => {
            selectSuggestion(row, columnIndex);

            suggestionsList.style.display = 'none'
            document.getElementById('overlay').style.display = 'none';
            document.body.classList.remove('modal-open');
        }
        suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.body.classList.add('modal-open');

}

// Функция для выбора подсказки
function selectSuggestion(item, columnIndex) {
    const input = document.querySelectorAll('.search-input')[columnIndex];

    if (columnIndex === 0) {
        input.value = item.name;
    } else if (columnIndex === 1) {
        input.value = item.abbreviation;
    }

    filterTable(columnIndex); // Фильтровать таблицу по выбранной подсказке
}

// крестик в инпуте для поиска

const tableInput = document.querySelectorAll('.search-input');
const tableClearIcon = document.querySelectorAll('.search-icons__del')
const tableSearchIcon = document.querySelectorAll('.search-input__icon')

for (let i=0; i<tableInput.length; i++) {

    tableInput[i].addEventListener('input', function() {
        if (tableInput[i].value.length > 0) {
            tableClearIcon[i].style.display = 'block';
            tableSearchIcon[i].style.display = 'none'
            tableInput[i].classList.remove('search-input--focus')

        } else {
            tableClearIcon[i].style.display = 'none';
            tableSearchIcon[i].style.display = 'block'
            tableInput[i].classList.add('search-input--focus')
        }
    });

    tableClearIcon[i].addEventListener('click', function() {
        tableInput[i].value = '';
        tableClearIcon[i].style.display = 'none';
        tableSearchIcon[i].style.display = 'block'
        tableInput[i].classList.add('search-input--focus')
        tableInput[i].focus(); // Вернем фокус на инпут после очистки
        document.querySelectorAll('.suggestions-list')[i].style.display = 'none'; /* Убрать окно с подсказками */


        clearTable()
        generateTable(dataList)
    });
}
