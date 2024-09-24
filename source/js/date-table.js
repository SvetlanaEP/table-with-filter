let dataList = [
    {
        id: 1,
        abbreviation: 'АНО',
        name: 'автономная некоммерческая организация',
        isEducational: false
    },
    {
        id: 2,
        abbreviation: 'АНОО',
        name: 'Автономное некоммерческое образовательная организация',
        isEducational: true
    },
    {
        id: 3,
        abbreviation: 'АНОО',
        name: 'АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОБЩЕОБРАЗОВАТЕЛЬНАЯ ОРГАНИЗАЦИЯ',
        isEducational: false
    },
    {
        id: 4,
        abbreviation: 'АО',
        name: 'Акционерное общество',
        isEducational: false
    },
    {
        id: 5,
        abbreviation: 'АО НПО',
        name: 'Акционерное общество "Научно-производственная организация"',
        isEducational: false
    },
    {
        id: 6,
        abbreviation: 'АО НПФ',
        name: 'Акционерное общество "Негосударственный пенсионный фонд"',
        isEducational: false
    },
    {
        id: 7,
        abbreviation: 'АО ПКО',
        name: 'АКЦИОНЕРНОЕ ОБЩЕСТВО ПРОИЗВОДСТВЕННО-КОНСТРУКТОРСКОЕ ОБЪЕДИНЕНИЕ',
        isEducational: false
    },
    {
        id: 8,
        abbreviation: 'БФ',
        name: 'Благотворительный фонд',
        isEducational: false
    },
    {
        id: 9,
        abbreviation: 'Верхневолжский региональный филиал НПФ',
        name: 'Верхневолжский региональный филиал негосударственного пенсионного фонда',
        isEducational: false
    },
    {
        id: 10,
        abbreviation: 'Волжское МТУ по надзору за ЯРБ',
        name: 'Волжское межрегиональное территориальное управление по надзору за ядерной и радиационной безопасности',
        isEducational: false
    },
    {
        id: 11,
        abbreviation: 'ГАУ ДПО НО',
        name: 'Государственное образовательное учреждение дополнительного профессионального образования',
        isEducational: true
    },
    {
        id: 12,
        abbreviation: 'ГБОУ НПО',
        name: 'Государственное бюджетное образовательное учреждение начального профессионального образования',
        isEducational: true
    },
    {
        id: 13,
        abbreviation: 'ГБПОУ',
        name: 'Государственное бюджетное профессиональное образовательное учреждение',
        isEducational: true
    },
    {
        id: 14,
        abbreviation: 'ГБУ НО',
        name: 'Государственное бюджетное учреждение Нижегородской области',
        isEducational: false
    },
    {
        id: 15,
        abbreviation: 'ГБУЗ',
        name: 'Государственное бюджетное учреждение здравоохранения',
        isEducational: false
    },
    {
        id: 16,
        abbreviation: 'ГБУЗ НО',
        name: 'Государственное бюджетное учреждение здравоохранения Нижегородской области',
        isEducational: false
    },
    {
        id: 17,
        abbreviation: 'ГК',
        name: 'Гостиничный комплекс',
        isEducational: false
    },
    {
        id: 18,
        abbreviation: 'ГКОУ',
        name: 'Государственное казенное общеобразовательное учреждение',
        isEducational: true
    },
    {
        id: 19,
        abbreviation: 'ГНООУ Учебный центр',
        name: 'Государственное Нижегородское областное образовательное учреждение  Учебный центр',
        isEducational: true
    },
    {
        id: 20,
        abbreviation: 'Горьковский филиал ОАО',
        name: 'Горьковский филиал Открытого Акционерного Общества',
        isEducational: false
    },
    {
        id: 21,
        abbreviation: 'ГОУ',
        name: 'Государственное образовательное учреждение',
        isEducational: true
    },
    {
        id: 22,
        abbreviation: 'ГОУ ВПО',
        name: 'Государственное образовательное учреждение высшего профессионального образования',
        isEducational: true
    },
    {
        id: 23,
        abbreviation: 'ГОУ ДПО',
        name: 'Государственное образовательное учреждение дополнительного профессионального образования',
        isEducational: true
    },
    {
        id: 24,
        abbreviation: 'ГОУ НПО',
        name: 'Государственное образовательное учреждение начального профессионального образования',
        isEducational: true
    },
    {
        id: 25,
        abbreviation: 'ГП НО',
        name: 'Государственное Предприятие Нижегородской Области',
        isEducational: false
    },
    {
        id: 26,
        abbreviation: 'ГУ',
        name: 'ГЛАВНОЕ УПРАВЛЕНИЕ',
        isEducational: false
    },
    {
        id: 27,
        abbreviation: 'ГУЗ',
        name: 'Государственный университет по землеустройству',
        isEducational: true
    },
    {
        id: 28,
        abbreviation: 'ГУК',
        name: 'Государственное учреждение культуры',
        isEducational: false
    },
    {
        id: 29,
        abbreviation: 'ГУП',
        name: 'Государственное унитарное предприятие',
        isEducational: false
    },
    {
        id: 30,
        abbreviation: 'ГЭПП',
        name: 'Государственное энергетическое производственное предприятие',
        isEducational: false
    },
    {
        id: 31,
        abbreviation: 'ДКБ',
        name: 'ДОРОЖНАЯ КЛИНИЧЕСКАЯ БОЛЬНИЦА',
        isEducational: false
    },
    {
        id: 32,
        abbreviation: 'ЗАО',
        name: 'Закрытое Акцианерное Общество',
        isEducational: false
    },
    {
        id: 33,
        abbreviation: 'Избирательное объединение',
        name: 'Избирательное объединение',
        isEducational: false
    },
    {
        id: 34,
        abbreviation: 'ИП',
        name: 'Индивидуальный предприниматель',
        isEducational: false
    },
    {
        id: 35,
        abbreviation: 'КП',
        name: 'Комбинат питания',
        isEducational: false
    },
    {
        id: 36,
        abbreviation: 'Кредитный Потребительский Кооператив',
        name: 'Кредитный Потребительский Кооператив',
        isEducational: false
    },
    {
        id: 37,
        abbreviation: 'КФХ',
        name: 'Крестьянское фермерское хозяйство',
        isEducational: false
    },
    {
        id: 38,
        abbreviation: 'КЦ',
        name: 'Культурный центр',
        isEducational: false
    },
    {
        id: 39,
        abbreviation: 'МАДОУ',
        name: 'Муниципальное автономное дошкольное образовательное учреждение',
        isEducational: true
    },
    {
        id: 40,
        abbreviation: 'МБДОУ',
        name: 'МБДОУ',
        isEducational: true
    },
    {
        id: 41,
        abbreviation: 'МБУ',
        name: 'Муниципальное Бюджетное Учреждение',
        isEducational: true
    },
    {
        id: 42,
        abbreviation: 'МБУ ДО',
        name: 'Муниципальное Бюджетное Учреждение Дополнительного Образования',
        isEducational: true
    },
    {
        id: 43,
        abbreviation: 'МДОУ',
        name: 'Муниципальное дошкольное образовательное учрежение',
        isEducational: true
    },
    {
        id: 44,
        abbreviation: 'МКУ',
        name: 'Муниципальное казенное учреждение',
        isEducational: false
    },
    {
        id: 45,
        abbreviation: 'МЛПУ',
        name: 'Муниципальное лечебно-профилактическое учреждение',
        isEducational: false
    },
    {
        id: 46,
        abbreviation: 'МОУ',
        name: 'Муниципальное образовательное учрежение',
        isEducational: true
    },
    {
        id: 47,
        abbreviation: 'МП',
        name: 'Малое предприятие',
        isEducational: false
    },
    {
        id: 48,
        abbreviation: 'МП',
        name: 'Муниципальное предприятие',
        isEducational: false
    },
    {
        id: 49,
        abbreviation: 'МП города Нижнего Новгорода',
        name: 'Муниципальное предприятие города Нижнего Новгорода',
        isEducational: false
    },
    {
        id: 50,
        abbreviation: 'МУ',
        name: 'Муниципальное Управление',
        isEducational: false
    },
    {
        id: 51,
        abbreviation: 'МУК',
        name: 'Муниципальное учрежение культуры',
        isEducational: false
    },
    {
        id: 52,
        abbreviation: 'Муниципальное автономное учреждение культуры',
        name: 'Муниципальное автономное учреждение культуры',
        isEducational: false
    },
    {
        id: 53,
        abbreviation: 'Муниципальное автономное учреждение муниципальный центр',
        name: 'Муниципальное автономное учреждение культуры',
        isEducational: false
    },
    {
        id: 54,
        abbreviation: 'Муниципальное автономное учреждение муниципальный центр',
        name: 'Муниципальное автономное учреждение муниципальный центр',
        isEducational: false
    },
    {
        id: 55,
        abbreviation: 'МУП',
        name: 'Муниципальное унитарное предприятие',
        isEducational: false
    },
    {
        id: 56,
        abbreviation: 'НАО',
        name: 'Некоммерческое  акционерное общество',
        isEducational: false
    },
    {
        id: 57,
        abbreviation: 'Нижегородский филиал АО',
        name: 'Нижегородский филиал Акционерного общества',
        isEducational: false
    },
    {
        id: 58,
        abbreviation: 'Нижегородский филиал ООО',
        name: 'Нижегородский филиал Общества с ограниченной ответственностью',
        isEducational: false
    },
    {
        id: 59,
        abbreviation: 'Нижегородский филиал СОАО',
        name: 'Нижегородский филиал Страховое открытое акционерное общество',
        isEducational: false
    },
    {
        id: 60,
        abbreviation: 'НОАО',
        name: 'Некоммерческое открытое акционерное общество',
        isEducational: false
    },
    {
        id: 61,
        abbreviation: 'НОУ',
        name: 'Негосударственное образовательное учреждение',
        isEducational: true
    },
    {
        id: 62,
        abbreviation: 'НОЧУ',
        name: 'Негосударственное образовательное частное учреждение',
        isEducational: true
    },
    {
        id: 63,
        abbreviation: 'НП',
        name: 'Некоммерческое партнерство',
        isEducational: false
    },
    {
        id: 64,
        abbreviation: 'НУЗ',
        name: 'Негосударственное учреждение здравоохранения',
        isEducational: false
    },
    {
        id: 65,
        abbreviation: 'НФ ГУ',
        name: 'Нижегородского филиала Государственного университета',
        isEducational: true
    },
    {
        id: 66,
        abbreviation: 'НФ ГУ-ВШЭ',
        name: 'Нижегородского филиала Государственного университета Высшей школы экономики',
        isEducational: true
    },
    {
        id: 67,
        abbreviation: 'ОАО',
        name: 'Открытое акционерное общество',
        isEducational: false
    },
    {
        id: 68,
        abbreviation: 'ООО',
        name: 'Общество с ограниченной ответственностью',
        isEducational: false
    },
    {
        id: 69,
        abbreviation: 'ООО  ПРОИЗВОДСТВЕННО-СТРОИТЕЛЬНАЯ КОМПАНИЯ',
        name: 'Общество с ограниченной ответственностью  ПРОИЗВОДСТВЕННО-СТРОИТЕЛЬНАЯ КОМПАНИЯ',
        isEducational: false
    },
    {
        id: 70,
        abbreviation: 'ООО "ТД"',
        name: 'Общество с ограниченной ответственностью "Торговый дом"',
        isEducational: false
    },
    {
        id: 71,
        abbreviation: 'ООО "ИЗДАТЕЛЬСКИЙ ДОМ"',
        name: 'Общество с ограниченной ответственностью "ИЗДАТЕЛЬСКИЙ ДОМ"',
        isEducational: false
    },
    {
        id: 72,
        abbreviation: 'ООО "ИЮБ"',
        name: 'Общество с ограниченной ответственностью "Информационно-юридическое бюро"',
        isEducational: false
    },
    {
        id: 73,
        abbreviation: 'ООО "ННПЦ"',
        name: 'Общество с ограниченной ответственностью "Нижегородский научно-производственный центр"',
        isEducational: false
    },
    {
        id: 74,
        abbreviation: 'ООО "НПО"',
        name: 'Общество с ограниченной ответственностью "Научно-производственное объединение"',
        isEducational: false
    },
    {
        id: 75,
        abbreviation: 'ООО "НПФ"',
        name: 'Общество с ограниченной ответственностью "Научно-производственная фирма"',
        isEducational: false
    },
    {
        id: 76,
        abbreviation: 'ООО "ПО"',
        name: 'Общество с ограниченной ответственностью "Производственное объединение"',
        isEducational: false
    },
    {
        id: 77,
        abbreviation: 'ООО "ППИЦ"',
        name: 'Общество с ограниченной ответственностью "Проектно-производственный и информационный центр"',
        isEducational: false
    },
    {
        id: 78,
        abbreviation: 'ООО "Предприятие"',
        name: 'Общество с ограниченной ответственностью "Предприятие"',
        isEducational: false
    },
    {
        id: 79,
        abbreviation: 'ООО "ПТФ"',
        name: 'Общество с ограниченной ответственностью "Производственно-торговая фирма"',
        isEducational: false
    },
    {
        id: 80,
        abbreviation: 'ООО "ПТЦ"',
        name: 'Общество с ограниченной ответственностью "Производственно-технический центр"',
        isEducational: false
    },
    {
        id: 81,
        abbreviation: 'ООО "ПШО"',
        name: 'Общество с ограниченной ответственностью "Производственное швейное объединение"',
        isEducational: false
    },
    {
        id: 82,
        abbreviation: 'ООО "РА"',
        name: 'Общество с ограниченной ответственностью "Рекламное агентство"',
        isEducational: false
    },
    {
        id: 83,
        abbreviation: 'ООО "Рекламная группа"',
        name: 'Общество с ограниченной ответственностью "Рекламная группа"',
        isEducational: false
    },
    {
        id: 84,
        abbreviation: 'ООО "Страховая группа"',
        name: 'Общество с ограниченной ответственностью "Страховая группа"',
        isEducational: false
    },
    {
        id: 85,
        abbreviation: 'ООО "СФК"',
        name: 'Общество с ограниченной ответственностью "Строительно-финансовая компания"',
        isEducational: false
    },
    {
        id: 86,
        abbreviation: 'ООО "Торговая компания"',
        name: 'Общество с ограниченной ответственностью "Торговая компания"',
        isEducational: false
    },
    {
        id: 87,
        abbreviation: 'ООО "Торговый дом"',
        name: 'Общество с ограниченной ответственностью "Торговый дом"',
        isEducational: false
    },
    {
        id: 88,
        abbreviation: 'ООО "Ук"',
        name: 'Общество с ограниченной ответственностью "Управляющая компания"',
        isEducational: false
    },
    {
        id: 89,
        abbreviation: 'ООО "Управляющая компания"',
        name: 'Общество с ограниченной ответственностью "Управляющая компания"',
        isEducational: false
    },
    {
        id: 90,
        abbreviation: 'ООО "Фирма"',
        name: 'Общество с ограниченной ответственностью "Фирма"',
        isEducational: false
    },
    {
        id: 91,
        abbreviation: 'ООО "ЧОА"',
        name: 'Общество с ограниченной ответственностью "Частное охранное агентство"',
        isEducational: false
    },
    {
        id: 92,
        abbreviation: 'ООО "Частное охранное предприятие"',
        name: 'Общество с ограниченной ответственностью "Частное охранное предприятие"',
        isEducational: false
    },
    {
        id: 93,
        abbreviation: 'ООО "ЧППФ"',
        name: 'Общество с ограниченной ответственностью "Частное предприятие производственная фирма"',
        isEducational: false
    },
    {
        id: 94,
        abbreviation: 'ООО "Ювелирная студия"',
        name: 'Общество с ограниченной ответственностью "Ювелирная студия"',
        isEducational: false
    },
    {
        id: 95,
        abbreviation: 'ООО Агенство недвижимости',
        name: 'Общество с ограниченной ответственностью Агенство недвижимости',
        isEducational: false
    },
    {
        id: 96,
        abbreviation: 'ООО ГК',
        name: 'Общество с ограниченной ответственностью Группа компаний',
        isEducational: false
    },
    {
        id: 97,
        abbreviation: 'ООО НПК',
        name: 'Общество с ограниченной ответственностью Научно-производственная компания',
        isEducational: false
    },
    {
        id: 98,
        abbreviation: 'ООО НПО',
        name: 'Общество с ограниченной ответственностью Научно-производственное объединение',
        isEducational: false
    },
    {
        id: 99,
        abbreviation: 'ООО НПП',
        name: 'Общество с ограниченной ответственностью Научно-производственное предприятие',
        isEducational: false
    },
    {
        id: 100,
        abbreviation: 'ООО НПФ',
        name: 'Общество с ограниченной ответственностью Научно-производственная фирма',
        isEducational: false
    },
    {
        id: 101,
        abbreviation: 'ООО НПЦ',
        name: 'Общество с ограниченной ответственностью Научно-производственный центр',
        isEducational: false
    },
    {
        id: 102,
        abbreviation: 'ООО НТП',
        name: 'Общество с ограниченной ответственностью Научно-техническое предприятие',
        isEducational: false
    },
    {
        id: 103,
        abbreviation: 'ООО НТУ',
        name: 'Общество с ограниченной ответственностью Нижегородские технологии утепления',
        isEducational: false
    },
    {
        id: 103,
        abbreviation: 'ООО О',
        name: 'Общество с ограниченной ответственностью ответственностью Объединение',
        isEducational: false
    },
    {
        id: 104,
        abbreviation: 'ООО ОА',
        name: 'Общество с ограниченной ответственностью Охранное агентство',
        isEducational: false
    },
    {
        id: 105,
        abbreviation: 'ООО ОП',
        name: 'Общество с ограниченной ответственностью Охранное предприятие',
        isEducational: false
    },
    {
        id: 106,
        abbreviation: 'ООО Охранная фирма',
        name: 'Общество с ограниченной ответственностью Охранная фирма',
        isEducational: false
    },
    {
        id: 107,
        abbreviation: 'ООО Охранное предприятие',
        name: 'Общество с ограниченной ответственностью Охранное предприятие',
        isEducational: false
    },
    {
        id: 108,
        abbreviation: 'ООО ПК',
        name: 'Общество с ограниченной ответственностью Производственная компания',
        isEducational: false
    },
    {
        id: 109,
        abbreviation: 'ООО ПКК',
        name: 'Общество с ограниченной ответственностью Производственно-Коммерческая Компания',
        isEducational: false
    },
    {
        id: 110,
        abbreviation: 'ООО ПКП',
        name: 'Общество с ограниченной ответственностью Промышленно-коммерческое предприятие',
        isEducational: false
    },
    {
        id: 111,
        abbreviation: 'ООО ПКФ',
        name: 'Общество с ограниченной ответственностью Производственно-коммерческая фирма',
        isEducational: false
    },
    {
        id: 112,
        abbreviation: 'ООО ПТО',
        name: 'Общество с ограниченной ответственностью Производственно-творческое объединение',
        isEducational: false
    },
    {
        id: 113,
        abbreviation: 'ООО ПТЦ',
        name: 'Общество с ограниченной ответственностью Производственно-торговый центр',
        isEducational: false
    },
    {
        id: 114,
        abbreviation: 'ООО ПТЦ',
        name: 'Общество с ограниченной ответственностью Производственно-технологический центр',
        isEducational: false
    },
    {
        id: 115,
        abbreviation: 'ООО ПФ',
        name: 'Общество с ограниченной ответственностью Производственная фирма',
        isEducational: false
    },
    {
        id: 116,
        abbreviation: 'ООО РИА',
        name: 'Общество с ограниченной ответственностью Региональное информационное агентство',
        isEducational: false
    },
    {
        id: 117,
        abbreviation: 'ООО РК',
        name: 'Общество с ограниченной ответственностью Риэлтерская компания',
        isEducational: false
    },
    {
        id: 118,
        abbreviation: 'ООО сельскохозяйственное предприятие',
        name: 'Общество с ограниченной ответственностью сельскохозяйственное предприятие',
        isEducational: false
    },
    {
        id: 119,
        abbreviation: 'ООО СК',
        name: 'Общество с ограниченной ответственностью СК',
        isEducational: false
    },
    {
        id: 120,
        abbreviation: 'ООО СКО',
        name: 'Общество с ограниченной ответственностью СКО',
        isEducational: false
    },
    {
        id: 121,
        abbreviation: 'ООО СО',
        name: 'Общество с ограниченной ответственностью СО',
        isEducational: false
    },
    {
        id: 122,
        abbreviation: 'ООО СОА',
        name: 'Общество с ограниченной ответственностью СОА',
        isEducational: false
    },
    {
        id: 123,
        abbreviation: 'ООО СП',
        name: 'Общество с ограниченной ответственностью СП',
        isEducational: false
    },
    {
        id: 124,
        abbreviation: 'ООО СПК',
        name: 'Общество с ограниченной ответственностью Сельскохозяйственный производственный кооператив',
        isEducational: false
    },
    {
        id: 125,
        abbreviation: 'ООО Судостроительная компания',
        name: 'Общество с ограниченной ответственностью Судостроительная компания',
        isEducational: false
    },
    {
        id: 126,
        abbreviation: 'ООО СХ',
        name: 'Общество с ограниченной ответственностью СХ',
        isEducational: false
    },
    {
        id: 127,
        abbreviation: 'ООО ТА',
        name: 'Общество с ограниченной ответственностью ТА',
        isEducational: false
    },
    {
        id: 128,
        abbreviation: 'ООО ТД',
        name: 'Общество с ограниченной ответственностью ТД',
        isEducational: false
    },
    {
        id: 129,
        abbreviation: 'ООО Торговая компания',
        name: 'Общество с ограниченной ответственностью ТК',
        isEducational: false
    },
    {
        id: 130,
        abbreviation: 'ООО Торговый дом',
        name: 'Общество с ограниченной ответственностью Тороговый дом',
        isEducational: false
    },
    {
        id: 131,
        abbreviation: 'ООО ТФ',
        name: 'Общество с ограниченной ответственностью ТФ',
        isEducational: false
    },
    {
        id: 132,
        abbreviation: 'ООО ТЦРВ',
        name: 'Общество с ограниченной ответственностью ТЦРВ',
        isEducational: false
    },
    {
        id: 133,
        abbreviation: 'ООО УК',
        name: 'Общество с ограниченной ответственностью управляющая компания',
        isEducational: false
    },
    {
        id: 134,
        abbreviation: 'ООО Фирма',
        name: 'Общество с ограниченной ответственностью фирма',
        isEducational: false
    },
    {
        id: 135,
        abbreviation: 'ООО ЦДА',
        name: 'ООО Центр доработки автомобилей',
        isEducational: false
    },
    {
        id: 136,
        abbreviation: 'ООО ЧОО',
        name: 'ООО Частная охранная организация',
        isEducational: false
    },
    {
        id: 137,
        abbreviation: 'ООО Частное агенство занятости',
        name: 'Общество с ограниченной ответственностью частное агентство занятости',
        isEducational: false
    },
    {
        id: 138,
        abbreviation: 'ООО ЧОО',
        name: 'Общество с ограниченной ответственностью ЧОО',
        isEducational: false
    },
    {
        id: 139,
        abbreviation: 'ООО ЧОП',
        name: 'Общество с ограниченной ответственностью ЧОП',
        isEducational: false
    },
    {
        id: 140,
        abbreviation: 'ООО ЧОФ',
        name: 'Общество с ограниченной ответственностью ЧОФ',
        isEducational: false
    },
    {
        id: 141,
        abbreviation: 'ПАО',
        name: 'Публичное акционерное общество',
        isEducational: false
    },
    {
        id: 142,
        abbreviation: 'ПАО ПКО',
        name: 'Публичное акционерное общество',
        isEducational: false
    },
    {
        id: 143,
        abbreviation: 'ПБОЮЛ',
        name: 'Предприниматель (осуществляющий деятельность) без образования юридического лица',
        isEducational: false
    },
    {
        id: 144,
        abbreviation: 'ТСЖ',
        name: 'Товарищество собственников жилья',
        isEducational: false
    },
    {
        id: 145,
        abbreviation: 'ТСН',
        name: 'ТОВАРИЩЕСТВО СОБСТВЕННИКОВ НЕДВИЖИМОСТИ',
        isEducational: false
    },
    {
        id: 146,
        abbreviation: 'ФБУ',
        name: 'Федеральное бюджетное учреждение',
        isEducational: false
    },
    {
        id: 146,
        abbreviation: 'ФБУ',
        name: 'Федеральное бюджетное учреждение',
        isEducational: false
    },
    {
        id: 147,
        abbreviation: 'ФБУЗ',
        name: 'Федеральное бюджетное учреждение здравоохранение',
        isEducational: false
    },
    {
        id: 148,
        abbreviation: 'ФБУН',
        name: 'Федеральное бюджетное учреждение науки',
        isEducational: false
    },
    {
        id: 149,
        abbreviation: 'ФГП',
        name: 'Федеральное государственное  предприятие',
        isEducational: false
    },
    {
        id: 150,
        abbreviation: 'ФГУП',
        name: 'Федеральное государственное унитарное предприятие',
        isEducational: false
    },
    {
        id: 151,
        abbreviation: 'Федеральное Государственное Унитарное Предприятие',
        name: 'Федеральное Государственное Унитарное Предприятие',
        isEducational: false
    },
    {
        id: 152,
        abbreviation: 'ФКП',
        name: 'Федеральное казенное предприятие',
        isEducational: false
    },
    {
        id: 153,
        abbreviation: 'ЧОУ',
        name: 'Частное образовательное учреждение',
        isEducational: false
    },
    {
        id: 154,
        abbreviation: 'ЧП',
        name: 'Частный предприниматель',
        isEducational: false
    },
    {
        id: 155,
        abbreviation: 'ЧУДДО',
        name: 'Частное учреждение дошкольного и дополнительного образования',
        isEducational: true
    },
    {
        id: 156,
        abbreviation: 'ЧУЗ',
        name: 'Частное  учреждение здравоохранения',
        isEducational: false
    },
]

const rowTemplate = document.querySelector('#date-table').content.querySelector('.data-item');
const dateTableContainer = document.querySelector('#date-table-container')

let currentFilterData = dataList; // Данные в таблице на странице на данный момент

// Ф-я для динамического вывода данных в табл
function generateTable(data) {

    const rowListFragment = document.createDocumentFragment()

    data.forEach((row) => {
        const rowElement = rowTemplate.cloneNode(true);

        rowElement.querySelector('#data-id').textContent = row.id;
        rowElement.querySelector('#data-full-name').textContent = row.name.charAt(0).toUpperCase() + row.name.slice(1);
        rowElement.querySelector('#data-short-name').textContent = row.abbreviation;

        rowElement.dataset.id = row.id

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

// По поиску в инпуте



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
        return;
    }

    clearTable();
    generateTable(filteredData);

}

function showSuggestions(columnIndex, inputIndex) {
    const input = document.querySelectorAll('.search-input')[inputIndex];
    const filter = input.value.toLowerCase();


    const isTablet = window.matchMedia('(min-width: 640px)').matches
    let parentCell;
    if (isTablet) {
        parentCell = input.closest('th')
    } else {
       parentCell = input.closest('.data-item__item--search-mobile')
    }

    const inputClear = parentCell.querySelector('.search-icons__del')

    const suggestionsList = columnIndex === 0 ?
        parentCell.querySelector('.name-suggestions-list') :
       parentCell.querySelector('.abbreviation-suggestions-list');

    suggestionsList.innerHTML = '';

    inputClear.addEventListener('click', () => {
        suggestionsList.style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        document.body.classList.remove('modal-open');
        parentCell.style.zIndex = '1'
        parentCell.style.border = '1px solid #CBCBCB'
    })

    if (filter.length === 0) {
        suggestionsList.style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        document.body.classList.remove('modal-open');
        parentCell.style.zIndex = '1'
        parentCell.style.border = '1px solid #CBCBCB'
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

        return textToCheck.startsWith(filter);
    });

    const uniqueSuggestions = Array.from(new Set(filteredData.map(row => {
        return columnIndex === 0 ? row.name : row.abbreviation;
    })));


    // Доступное пространство сверху и снизу
    const inputRect = input.getBoundingClientRect();
    const spaceAbove = inputRect.top;
    const spaceBelow = window.innerHeight - inputRect.bottom;

    let availableHeight;
    let displayAbove = false;

    // Определим, где больше места
    if (spaceAbove > spaceBelow) {
        availableHeight = spaceAbove;
        displayAbove = true;
    } else {
        availableHeight = spaceBelow;
        displayAbove = false;
    }
    let totalHeight = 0;
    let finalSuggestionsCount = 0;
    const maxSuggestions = Math.min(10, uniqueSuggestions.length);

    // Вставляем элемент с текстом "Выберите вариант"
    const selectOptionLi = document.createElement('li');

    // Проверяем, есть ли подходящие подсказки
    if (uniqueSuggestions.length === 0) {
        selectOptionLi.textContent = 'Совпадений нет';  // Если нет данных, выводим "Данных нет"
    } else {
        selectOptionLi.textContent = 'Выберите вариант или продолжите ввод';
    }
    selectOptionLi.style.fontSize = '12px'; // Добавляем стиль для текста
    selectOptionLi.style.display = 'block';
    selectOptionLi.style.visibility = 'hidden';  // Скрываем его для измерения высоты
    suggestionsList.appendChild(selectOptionLi);



            for (let i = 0; i < maxSuggestions; i++) {

                // Временный элемент для определения высоты строки
                const tempLi = document.createElement('li');
                tempLi.style.display = 'block'
                tempLi.style.visibility = 'hidden';
                tempLi.innerHTML = highlightMatchingText(uniqueSuggestions[i], filter)
                suggestionsList.appendChild(tempLi);
            }

    // Теперь измеряем их высоту внутри requestAnimationFrame
    requestAnimationFrame(() => {
        const suggestionItems = suggestionsList.querySelectorAll('li');
        suggestionItems.forEach((li, index) => {
            const suggestionHeight = li.getBoundingClientRect().height;

            // Проверяем, помещается ли элемент в доступное пространство
            if (totalHeight + suggestionHeight <= availableHeight) {
                totalHeight += suggestionHeight + 1;
                finalSuggestionsCount++;
            } else {
                // Если больше не влезает, удаляем оставшиеся элементы
                if (index >= finalSuggestionsCount) {
                    li.remove();
                }
            }
        });

        // Теперь все оставшиеся элементы видимы
        suggestionItems.forEach((li, index) => {
            if (index < finalSuggestionsCount) {
                li.style.visibility = 'visible';
            }


        });

    });

        // Настройка позиции списка подсказок
        if (displayAbove) {
            suggestionsList.style.position = 'absolute';
            suggestionsList.style.bottom = `${input.offsetHeight}px`;
            suggestionsList.style.top = 'auto';
        } else {
            suggestionsList.style.position = 'absolute';
            suggestionsList.style.top = `${input.offsetHeight}px`;
            suggestionsList.style.bottom = 'auto';
        }

        // Отображение списка подсказок
        suggestionsList.style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
        document.body.classList.add('modal-open');
        parentCell.style.zIndex = '20';
        parentCell.style.border = '2px solid #00B0D9';
}

// ф-я для подсветки части текста

function highlightMatchingText(text, filter) {
    if (!filter) return text;
    const regex = new RegExp(`^(${filter})`,`gi`);  // ^ - начало строки
    return text.replace(regex, '<mark>$1</mark>')
}


// крестик в инпутах

const tableInput = document.querySelectorAll('.search-input');
const tableClearIcon = document.querySelectorAll('.search-icons__del')
const tableSearchIcon = document.querySelectorAll('.search-input__icon')

for (let i=0; i<tableInput.length; i++) {

    tableInput[i].addEventListener('focus', () => {
        tableClearIcon[i].style.display = 'block';
        tableSearchIcon[i].style.display = 'none';
        tableInput[i].classList.remove('search-input--focus');
    });

    tableInput[i].addEventListener('blur', () => {
        if (tableInput[i].value.length === 0) {
            tableClearIcon[i].style.display = 'none';
            tableSearchIcon[i].style.display = 'block';
            tableInput[i].classList.add('search-input--focus');
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

// Открыть форму для редактирования

document.addEventListener('DOMContentLoaded', function() {

    let currentRow = null;
    let idCurrentRow = null;

    // для редактирования
    const editPopup = document.querySelector('.edit-data');
    const closeEditForm = editPopup.querySelector('.popup-form__close');
    const cancelButtonEditForm = editPopup.querySelector('.popup-form__button--cancel');

    const textareaList = editPopup.querySelectorAll('textarea')

    const fullNameTextarea = document.querySelector('#edit-full-name');
    const shortNameTextarea = document.querySelector('#edit-abb-name');

    const clearInputButton = editPopup.querySelectorAll('.clear-icon__del')



    closeEditForm.addEventListener('click', () => {

        textareaList.forEach(textarea => {
            textarea.value = ''
        })

        closePopup(editPopup)
    })

    cancelButtonEditForm.addEventListener('click', (evt) => {
        evt.preventDefault()

        closePopup(editPopup)
    })

    for (let i=0; i < textareaList.length; i++) {

        clearInputButton[i].addEventListener('click', () => {

            textareaList[i].value = '';
            textareaList[i].focus()
        })
    }

    // кастомный селект топ

    const topSelectIconDel = document.querySelector('#top-select-button .select-icons__del');
    const searchInput = document.getElementById('search-input');

    const suggestionItems = document.querySelectorAll('.top-custom-select');
    const selectedText = document.querySelector('.custom-select__selected-0');
    const placeholderLabel = document.querySelector('.custom-select-placeholder');
    const topSelectList = document.querySelector('.custom-select-list');

    // Фильтрация при вводе текста в инпут
    searchInput.addEventListener('input', function() {
        const searchText = this.value.toLowerCase();

        suggestionItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchText)) {
                item.style.display = 'block'; // Показываем варианты, которые соответствуют поисковому запросу
            } else {
                item.style.display = 'none'; // Скрываем остальные
            }
        });
    });

    // Прекращаем закрытие выпадающего списка при клике на инпут
    searchInput.addEventListener('click', function (event) {
        event.stopPropagation(); // Останавливаем всплытие, чтобы не сработал клик на кнопке
    });

    suggestionItems.forEach(item => {
        item.addEventListener('click', function() {
            const selectedValue = this.getAttribute('data-value');

            // Отображаем выбранный вариант в инпуте
            searchInput.value = this.querySelector('.select-top-text').textContent;
            selectedText.textContent = this.textContent;

            // Фильтруем, если выбран не "все"
            if (selectedValue !== 'all') {
                const isEducational = selectedValue === 'true';
                currentFilterData = dataList.filter(item => item.isEducational === isEducational);
            } else {
                currentFilterData = [...dataList];
                topSelectIconDel.classList.add('visually-hidden')
            }
            topSelectIconDel.classList.remove('visually-hidden');

            generateTable(currentFilterData); // Отображаем отфильтрованные данные
        });
    });

    // Сброс по клику на крестик
    topSelectIconDel.addEventListener('click', function (event) {
        event.stopPropagation(); // Предотвращаем всплытие клика на триггер

        searchInput.value = ''
        selectedText.textContent = 'Тип организации';
        topSelectIconDel.classList.add('visually-hidden')
        topSelectIconDel.style.zIndex = '1';

        // Сбрасываем фильтр на "все"
        currentFilterData = dataList;
        generateTable(currentFilterData); // Перегенерируем таблицу
    })

    // кастом селект в попапе

        const customSelect = document.querySelector('.custom-select-edit');
        const trigger = customSelect.querySelector('.custom-select__trigger');
        const options = customSelect.querySelector('.custom-select__options');
        const hiddenInput = customSelect.querySelector('input[type="hidden"]');
        const addFormArrow = customSelect.querySelector('.select-icons__arrow');
        const clearSelectionIcon = customSelect.querySelector('.clear-icon--custom-select');


        trigger.addEventListener('click', function() {
            customSelect.classList.toggle('open');
            addFormArrow.classList.toggle('select-icons__arrow--open')
        });

        options.addEventListener('click', function(event) {
            if (event.target && event.target.nodeName === "DIV") {
                trigger.querySelector('span').textContent = event.target.textContent;
                hiddenInput.value = event.target.getAttribute('data-value');
                customSelect.classList.remove('open');
                clearSelectionIcon.style.display = 'block';
                addFormArrow.classList.remove('select-icons__arrow--open');
            }
        });

        document.addEventListener('click', function(event) {
            if (!customSelect.contains(event.target)) {
                customSelect.classList.remove('open');
                addFormArrow.classList.remove('select-icons__arrow--open');
            }
        });

    // Сброс выбора при клике на крестик
    clearSelectionIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие клика на триггер

        trigger.querySelector('span').textContent = 'Выберите тип организации'; // Возвращаем текст к исходному
        hiddenInput.value = ''; // Сбрасываем значение в hidden input
        clearSelectionIcon.style.display = 'none'; // Скрываем крестик
    });


    const editDataButton = document.querySelector('#popup-form-edit'); //кнопка сохранить

    editDataButton.addEventListener('click', (evt) => {
        evt.preventDefault()

        if (currentRow) {
            if (fullNameTextarea.value && shortNameTextarea.value) {
                const editedFullName = fullNameTextarea.value.trim()
                const editedShortName = shortNameTextarea.value.trim()

                const rowId = currentRow.dataset.id;
                const rowData = dataList.find(row => row.id === Number(rowId))

                if (rowData) {
                    rowData.name = editedFullName.charAt(0).toUpperCase() + editedFullName.slice(1);
                    rowData.abbreviation = editedShortName.charAt(0).toUpperCase() + editedFullName.slice(1);

                    generateTable(currentFilterData)
                    closePopup(editPopup)
                }
            }
        }
    })

    const tableData = document.querySelector('#date-table-container')
    const delPopup = document.querySelector('.del-data')
    const delButton = delPopup.querySelector('#popup-form-del')
    const cancelButtonDelForm = delPopup.querySelector('.popup-form__button--cancel');
    const idDataDel = delPopup.querySelector('#id-data-del')
    const fullNameDataDel = delPopup.querySelector('#name-data-del')
    const closeDelForm = delPopup.querySelector('.popup-form__close');

    tableData.addEventListener('click', function (evt) {
        const deleteButton = evt.target.closest('.data-item__button--del')
        const editButton = evt.target.closest('.data-item__button--edit')

        if (editButton) {
            currentRow = editButton.closest('tr');
            idCurrentRow = currentRow.dataset.id;

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
        }

        if (deleteButton) {
            currentRow = deleteButton.closest('tr')

            idCurrentRow = currentRow.dataset.id

            idDataDel.textContent = idCurrentRow;
            fullNameDataDel.textContent = currentRow.querySelector('#data-full-name').textContent

            openPopup(delPopup)
        }
    });

    delButton.addEventListener('click', () => {
        if (currentRow) {


            currentFilterData = currentFilterData.filter(row => row.id !== Number(idCurrentRow));

            generateTable(currentFilterData)

            currentRow = null;
            idCurrentRow = null;

            updateTotalCount()
            closePopup(delPopup)
        }
    })

    cancelButtonDelForm.addEventListener('click', () => {
        closePopup(delPopup)
    })

    closeDelForm.addEventListener('click', () => {
        closePopup(delPopup)
    })


    /* ф-я для добавления данных и проверка, есть ли уже такое имя в бд */
// Функция для проверки на дубликат
    function checkDuplicateAndShowPopup(newFullName) {
        const duplicate = dataList.find(row => row.name.toLowerCase() === newFullName.toLowerCase());

        if (duplicate) {
            // Показываем сообщение и ссылку
            const duplicateMessage = document.getElementById('duplicate-message');
            const textareaDuplicate = document.querySelector('#add-full-name');

            duplicateMessage.style.display = 'block';
            textareaDuplicate.classList.add('duplicate-textarea-style')

            // Событие при нажатии на ссылку для открытия попапа с данными дубликата
            document.getElementById('open-edit-popup').onclick = (e) => {
                e.preventDefault();
                openEditPopupWithData(duplicate);
            };
        } else {
            // Скрываем сообщение, если дубликат не найден
            hideDuplicateMessage();
        }
    }
// Обработчик формы для добавления данных
    document.querySelector('.add-data__form').addEventListener('submit', function(evt) {
        evt.preventDefault();

        const fullName = document.querySelector('#add-full-name').value.trim();
        const shortName = document.querySelector('#add-short-name').value.trim();
        const abbreviation = document.querySelector('#add-abb-name').value.trim().toUpperCase();
        const orgTypeSelect = document.querySelector('#type-org').value


        const duplicate = dataList.find(row => row.name.toLowerCase() === fullName.toLowerCase());

        if (duplicate) {
            // Показываем сообщение и ссылку
            const duplicateMessage = document.getElementById('duplicate-message');
            const textareaDuplicate = document.querySelector('#add-full-name');
            textareaDuplicate.classList.add('duplicate-textarea-style')
            duplicateMessage.style.display = 'block';



            // Событие при нажатии на ссылку для открытия попапа с данными дубликата
            document.getElementById('open-edit-popup').onclick = (e) => {
                e.preventDefault();
                openEditPopupWithData(duplicate);
            };
        } else {
            // Скрываем сообщение, если дубликат не найден
            hideDuplicateMessage();

            // Генерация нового ID
            const newId = dataList.length > 0 ? dataList[dataList.length - 1].id + 1 : 1;

            // Определение значения для поля isEducational
            const isEducational = orgTypeSelect === "Учебное";

            // Добавление новой записи в массив dataList
            const newData = {
                id: newId,
                name: capitalizeFirstLetter(fullName),
                shortName: capitalizeFirstLetter(shortName),
                abbreviation: capitalizeFirstLetter(abbreviation),
                isEducational: isEducational,
            };
            dataList.push(newData);

            // Обновление таблицы
            clearTable();
            generateTable(dataList);

            // Очистка полей формы
            document.querySelector('.add-data__form').reset();

            closePopup(addForm)
        }
    });
    // ф-я для скрытия предупреждения о дубликате

    function hideDuplicateMessage() {
        const duplicateMessage = document.getElementById('duplicate-message');
        const textareaDuplicate = document.querySelector('#add-full-name');

        duplicateMessage.style.display = 'none';
        textareaDuplicate.classList.remove('duplicate-textarea-style')
    }

    // Обработчик события на изменение ввода в поле "Полное название"
    const fullNameInput = document.getElementById('add-full-name');
    fullNameInput.addEventListener('input', () => {
        // Каждый раз, когда пользователь что-то вводит или удаляет, проверяем на дубликаты
        checkDuplicateAndShowPopup(fullNameInput.value);

        // Убираем предупреждение при любом изменении текста
        hideDuplicateMessage();
    });

    //ф-я для открытия попапа с повтором и заполнение данными

    function openEditPopupWithData(record) {
        // Открытие попапа

        openPopup(editPopup)

        // Заполнение полей попапа данными
        document.getElementById('edit-full-name').value = record.name;
        document.getElementById('edit-abb-name').value = record.abbreviation;
     //   document.querySelector('.popup-form__input[name="abbreviation"]').value = record.abbreviation;
      //  document.querySelector('.popup-form__input[name=""]').value = record.type;
    }

// Функция для преобразования первой буквы в заглавную
    function capitalizeFirstLetter(text) {
        return text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    // Экспорт

    const exportPopup = document.getElementById('export-popup');
    const exportOpenPopup = document.querySelector('#exportButton')
    const filenameInput = document.getElementById('generated-filename');
    const downloadButton = exportPopup.querySelector('#download-file');
    const closePopupButton = exportPopup.querySelector('.popup-form__close');
    const closePopupCancelButton = exportPopup.querySelector('.popup-form__button--cancel');

    let intervalId; // Для обновления секунд

    // Функция для генерации имени файла
    function generateFilename() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        // Формируем название файла
        return `Сокращенные юридические формы ${day}.${month}.${year} ${hours}_${minutes}_${seconds}.xlsx`;
    }

    // Открытие попапа и генерация имени файла
    function openExport() {
        exportPopup.classList.remove('popup-form--closed');
        document.getElementById('overlay').style.display = 'block';
        document.body.classList.add('modal-open');
        updateFilename();


        // Обновляем секунды каждые 5 секунд
        intervalId = setInterval(updateFilename, 5000);
    }

    // Закрытие попапа и остановка таймера
    function closeExport() {
        exportPopup.classList.add('popup-form--closed');
        document.getElementById('overlay').style.display = 'none';
        document.body.classList.remove('modal-open');
        clearInterval(intervalId); // Останавливаем таймер
    }

    // Обновление поля с именем файла
    function updateFilename() {
        const filename = generateFilename();
        filenameInput.value = filename;
    }

    // Функция для создания и скачивания файла
    function downloadFile(filename, content) {
        const blob = new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const link = document.createElement('a');

        link.href = URL.createObjectURL(blob);
        link.download = filename;

        // Автоматически кликаем на ссылку для открытия диалога сохранения
        link.click();

        // Освобождаем память
        URL.revokeObjectURL(link.href);
    }

    // Обработчик для кнопки выгрузки файла
    downloadButton.addEventListener('click', function () {
        const filename = filenameInput.value;
        const fileContent = "Пример данных для файла"; // Здесь должен быть контент файла, сгенерированный на основе данных

        downloadFile(filename, fileContent)
        closeExport(); // Закрываем попап после выгрузки
    });

    // Обработчики для кнопок закрытия попапа
    closePopupButton.addEventListener('click', closeExport);
    closePopupCancelButton.addEventListener('click', closeExport);

    exportOpenPopup.addEventListener('click', openExport)
})


