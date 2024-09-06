const dateList = [
    {
        id: 1,
        abbreviation: 'АНО',
        name: 'Автономная некоммерческая организация'
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
    }
]

const rowTemplate = document.querySelector('#date-table').content.querySelector('.data-item');
const dateTableContainer = document.querySelector('#date-table-container')

const rowListFragment = document.createDocumentFragment()

dateList.forEach((row) => {
    const rowElement = rowTemplate.cloneNode(true);

    rowElement.querySelector('#date-id').textContent = row.id;
    rowElement.querySelector('#date-full-name').textContent = row.name;
    rowElement.querySelector('#date-abb-name').textContent = row.abbreviation;

    rowListFragment.appendChild(rowElement);
});

dateTableContainer.appendChild(rowListFragment)

