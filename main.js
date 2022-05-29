//                                              OKTEN-HCAW-5-JS
//======================================================================================================================
//                                                Class Work
//                                              OKTEN-CW-5-JS
//======================================================================================================================
// // Взяти файл template_2.html та працювати в ньому
// // 1) Напишіть код, який :
// // a) змінює колір тексту елемнту з id main_header на назву групи в якій ви вчитесь (mon-year)
// let myGroup = document.getElementById('main_header');
//     myGroup.style.color = 'red';
//     myGroup.textContent = 'Dec - 2021';
//
// // b) робить шириниу елементу ul 400px
// let ul = document.getElementsByTagName('ul')[0];
//     ul.style.width = '400px';
//
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.querySelectorAll('.linkList');
// for (let i = 0; i < linkList.length; i++) {
//     let element = linkList[i];
//     element.style.width = '50%';
// };
//
// // d) отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.querySelectorAll('.listElement2');
// for (let i = 0; i < listElement2.length; i++) {
//     let element = listElement2[i];
//     let text = element.textContent;
//     console.log('Text in listElement2 -> ', text);
// };
//
// // e) отримує всі елементи li та змінює ім колір фону на сірий
// let allLi = document.querySelectorAll('li');
// for (let i = 0; i < 3; i++) {
//     let element = allLi[i];
//     element.style.backgroundColor = 'grey';
// };
//
// // f) отримує всі елементи 'a' та додає їм клас anchor
// let allAnhorCW = document.querySelectorAll('a');
// for (let i = 0; i < 3; i++) {
//     let element = allAnhorCW[i];
//     element.className = 'anchor';
// };
//
// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let allAnhorCW2 = document.querySelectorAll('a');
// for (let i = 0; i < 3; i++) {
//     let element = allAnhorCW2[i];
//     if (element.textContent === 'link3') {
//         element.style.fontSize = '40px';
//     };
// };
//
// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let allAnhorCW3 = document.querySelectorAll('a');
// for (let i = 0; i < 3; i++) {
//     let element = allAnhorCW3[i];
//     let text = element.textContent;
//     element.className = `element_${text}`;
// };
//
// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeader = document.querySelectorAll('.sub-header');
// for (let i = 0; i < subHeader.length; i++) {
//     let element = subHeader[i];
//     let color = prompt(`Enter Color fo element number ${i+1}`);
//     element.style.backgroundColor = color;
// };
//
// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subHeader2 = document.querySelectorAll('.sub-header');
// for (let i = 0; i < subHeader2.length; i++) {
//     let element = subHeader2[i];
//     if (element.textContent === 'content 2 segment') {
//         let color = prompt(`Enter Color fo element `);
//         element.style.color = color;
//     };
// };
//
// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content_1 = document.querySelectorAll('.content_1');
// for (let i = 0; i < content_1.length; i++) {
//     let element = content_1[i];
//     let size = prompt('Enter Size of text');
//     element.style.fontSize = size + 'px';
// };
//
// // l) отримати елементи p та змінити їм padding на 20px
// let pCW = document.querySelectorAll('p');
// for (let i = 0; i < 2; i++) {
//     let element = pCW[i];
//         element.style.padding = '20px';
// };
//
// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let text2 = document.querySelectorAll('.text2');
// for (let i = 0; i < text2.length; i++) {
//     let element = text2[i];
//     element.textContent = 'Dec - 2021';
// };
//
// //======================================================================================================================
// //                                                Home Work
// //                                              OKTEN-HW-5-JS
// //======================================================================================================================
// // - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // -- отримує текст з параграфа з id "content"
// let textIdContent = document.getElementById('content').textContent;
//     console.log("Text -> ", textIdContent);
//
// // -- отримує текст з блоку з id "rules"
// let textIdRules = document.getElementById('rules').textContent;
//     console.log('Text -> ', textIdRules);
//
// // -- замініть текст параграфа з id 'content' на будь-який інший
// let textIdContent2 = document.getElementById('content').textContent = 'Dec - 2021';
//     console.log('Tекст параграфа з id "content" -> ', textIdContent2);
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший
// let textIdRules2 = document.getElementById('rules').textContent = 'Dec- 2021';
//     console.log('Tекст параграфа з id "rules" -> ', textIdRules2);
//
// // -- змініть кожному елементу колір фону на червоний
// let backgroundColor = document.getElementById('hw');
//     backgroundColor.style.backgroundColor = 'red';
//
// // -- змініть кожному елементу колір тексту на синій
// let textColorBlue = document.getElementById('hw');
//     textColorBlue.style.color = 'blue';
//
// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let allClassIdRules = document.querySelectorAll('#rules');
// for (let i = 0; i < allClassIdRules.length; i++) {
//     let element = allClassIdRules[i];
//     let classList = element.classList;
//     for (let j = 0; j < classList.length; j++) {
//         let classList2 = classList[j];
//         console.log('Class -> ', classList2);
//     };
// };
//
// // -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний якийсь
// let elemClassFcRules = document.querySelectorAll('.fc_rules');
// for (let i = 0; i < elemClassFcRules.length; i++) {
//     let element = elemClassFcRules[i];
//     element.addEventListener('click', function (e) {
//         console.log('Tекст елементу по якому клікнули -> ', e.target.textContent);
//     });
//     element.addEventListener('click', function (e) {
//         let text = e.target;
//         let red = Math.floor(Math.random()*250);
//         let green = Math.floor(Math.random()*250);
//         let blue = Math.floor(Math.random()*250);
//         text.style.color = `rgb(${red},${green},${blue})`;
//     });
// };
//
// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let elemClassFcRulesColorText = document.querySelectorAll('.fc_rules');
// for (let i = 0; i < elemClassFcRulesColorText.length; i++) {
//     let element = elemClassFcRulesColorText[i];
//     let red = Math.floor(Math.random()*250);
//     let green = Math.floor(Math.random()*250);
//     let blue = Math.floor(Math.random()*250);
//     element.style.color = `rgb(${red},${green},${blue})`;
//     // element.style.color = 'red';
// };

//======================================================================================================================
//                                             Additional Work
//                                              OKTEN-AW-5-JS
//======================================================================================================================
// - Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
let formName = document.forms.formName;
let inName = formName['inputName'];
let localKey = 'name';
localStorage.setItem(localKey, JSON.stringify([]));

    formName.addEventListener('submit', event => {
        let inputValue = inName.value;
        let name = JSON.parse(localStorage.getItem(localKey));
        name.push(inputValue);
        localStorage.setItem(localKey, JSON.stringify(name));
        // event.preventDefault();
    });

// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
// https://ru.wikipedia.org/wiki/
let itemForm = document.forms['formStore'];
let itemStoreKey = 'items';


localStorage.setItem(itemStoreKey, JSON.stringify([]));

let img = itemForm['itemImg'];
window.onkeyup = text;
let inputItemName2
function text(e) {
    inputItemName2 = e.target.value;
    let nameToUpperFirstLater = (inputItemName2.split('')[0].toUpperCase() + inputItemName2.slice(1, inputItemName2.length))
    switch (nameToUpperFirstLater) {
        case 'Bread':
            img.src = 'https://tagilhleb.ru/upload/iblock/515/515831aec3fa50047741c68b170541ac.png';
            break;
        case 'Salt':
            img.src = 'https://www.rossalt.ru/files/images/catalog_19a64d250147fd21aa5d5198dd7371d2.png';
            break;
        case 'Fish':
            img.src = 'http://povarixa.ru/images/photos/small/article4219.jpg';
            break;
        case 'Milk':
            img.src = 'https://roscontrol.com/wp-content/uploads/2021/09/e7b17f6a38a36f3af2d7.jpg';
            break;
        case 'Cookie':
            img.src = 'https://www.wholesomeyum.com/wp-content/uploads/2017/02/wholesomeyum-the-best-low-carb-keto-chocolate-chip-cookies-recipe-with-almond-flour-12.jpg';
            break;
        default:
            img.alt = 'Picture not found';
    };
};



itemForm.addEventListener('submit', e => {
    let inputItemName = itemForm['itemName'].value;
    let inputItemCount = itemForm['itemCount'].value;
    let inputItemPrice = itemForm['itemPrice'].value;
    // let img = itemForm['itemImg'];

    // let nameToUpper = (inputItemName.split('')[0].toUpperCase() + inputItemName.slice(1, inputItemName.length));

    // switch (nameToUpper) {
    //     case 'Bread':
    //         img.src = 'https://tagilhleb.ru/upload/iblock/515/515831aec3fa50047741c68b170541ac.png';
    //         break;
    //     case 'Salt':
    //         img.src = 'https://www.rossalt.ru/files/images/catalog_19a64d250147fd21aa5d5198dd7371d2.png';
    //         break;
    //     case 'Fish':
    //         img.src = 'http://povarixa.ru/images/photos/small/article4219.jpg';
    //         break;
    //     case 'Milk':
    //         img.src = 'https://roscontrol.com/wp-content/uploads/2021/09/e7b17f6a38a36f3af2d7.jpg';
    //         break;
    //     case 'Cookie':
    //         img.src = 'https://www.wholesomeyum.com/wp-content/uploads/2017/02/wholesomeyum-the-best-low-carb-keto-chocolate-chip-cookies-recipe-with-almond-flour-12.jpg';
    //         break;
    //     default:
    //         img.alt = 'Picture not found';
    // }

    let img = itemForm['itemImg'];

    let totallPrice = inputItemCount * inputItemPrice;
    let item = {
        name: inputItemName,
        count: inputItemCount,
        price: inputItemPrice,
        fullPrice: totallPrice,
        image: img
    }
    console.log('item ', item);
    let items = JSON.parse(localStorage.getItem(itemStoreKey));
        items.push(item);
        localStorage.setItem(itemStoreKey, JSON.stringify(items));
    e.preventDefault();
})


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//      Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//      розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//      розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
//
//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];


//======================================================================================================================