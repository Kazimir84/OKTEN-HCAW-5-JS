//                                              OKTEN-HCAW-5-JS
//======================================================================================================================
//                                                Class Work
//                                              OKTEN-CW-5-JS
//======================================================================================================================
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з id main_header на назву групи в якій ви вчитесь (mon-year)
let myGroup = document.getElementById('main_header');
    myGroup.style.color = 'red';
    myGroup.textContent = 'Dec - 2021';

// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul')[0];
    ul.style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.querySelectorAll('.linkList');
for (let i = 0; i < linkList.length; i++) {
    let element = linkList[i];
    element.style.width = '50%';
};

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.querySelectorAll('.listElement2');
for (let i = 0; i < listElement2.length; i++) {
    let element = listElement2[i];
    let text = element.textContent;
    console.log('Text in listElement2 -> ', text);
};

// e) отримує всі елементи li та змінює ім колір фону на сірий
let allLi = document.querySelectorAll('li');
for (let i = 0; i < 3; i++) {
    let element = allLi[i];
    element.style.backgroundColor = 'grey';
};

// f) отримує всі елементи 'a' та додає їм клас anchor
let allAnhorCW = document.querySelectorAll('a');
for (let i = 0; i < 3; i++) {
    let element = allAnhorCW[i];
    element.className = 'anchor';
};

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let allAnhorCW2 = document.querySelectorAll('a');
for (let i = 0; i < 3; i++) {
    let element = allAnhorCW2[i];
    if (element.textContent === 'link3') {
        element.style.fontSize = '40px';
    };
};

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let allAnhorCW3 = document.querySelectorAll('a');
for (let i = 0; i < 3; i++) {
    let element = allAnhorCW3[i];
    let text = element.textContent;
    element.className = `element_${text}`;
};

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.querySelectorAll('.sub-header');
for (let i = 0; i < subHeader.length; i++) {
    let element = subHeader[i];
    let color = prompt(`Enter Color fo element number ${i+1}`);
    element.style.backgroundColor = color;
};

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeader2 = document.querySelectorAll('.sub-header');
for (let i = 0; i < subHeader2.length; i++) {
    let element = subHeader2[i];
    if (element.textContent === 'content 2 segment') {
        let color = prompt(`Enter Color fo element `);
        element.style.color = color;
    };
};

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1 = document.querySelectorAll('.content_1');
for (let i = 0; i < content_1.length; i++) {
    let element = content_1[i];
    let size = prompt('Enter Size of text');
    element.style.fontSize = size + 'px';
};

// l) отримати елементи p та змінити їм padding на 20px
let pCW = document.querySelectorAll('p');
for (let i = 0; i < 2; i++) {
    let element = pCW[i];
        element.style.padding = '20px';
};

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let text2 = document.querySelectorAll('.text2');
for (let i = 0; i < text2.length; i++) {
    let element = text2[i];
    element.textContent = 'Dec - 2021';
};

//======================================================================================================================
//                                                Home Work
//                                              OKTEN-HW-5-JS
//======================================================================================================================
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let textIdContent = document.getElementById('content').textContent;
    console.log("Text -> ", textIdContent);

// -- отримує текст з блоку з id "rules"
let textIdRules = document.getElementById('rules').textContent;
    console.log('Text -> ', textIdRules);

// -- замініть текст параграфа з id 'content' на будь-який інший
let textIdContent2 = document.getElementById('content').textContent = 'Dec - 2021';
    console.log('Tекст параграфа з id "content" -> ', textIdContent2);

// -- замініть текст параграфа з id 'rules' на будь-який інший
let textIdRules2 = document.getElementById('rules').textContent = 'Dec- 2021';
    console.log('Tекст параграфа з id "rules" -> ', textIdRules2);

// -- змініть кожному елементу колір фону на червоний
let backgroundColor = document.getElementById('hw');
    backgroundColor.style.backgroundColor = 'red';

// -- змініть кожному елементу колір тексту на синій
let textColorBlue = document.getElementById('hw');
    textColorBlue.style.color = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let allClassIdRules = document.querySelectorAll('#rules');
for (let i = 0; i < allClassIdRules.length; i++) {
    let element = allClassIdRules[i];
    let classList = element.classList;
    for (let j = 0; j < classList.length; j++) {
        let classList2 = classList[j];
        console.log('Class -> ', classList2);
    };
};

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний якийсь
let elemClassFcRules = document.querySelectorAll('.fc_rules');
for (let i = 0; i < elemClassFcRules.length; i++) {
    let element = elemClassFcRules[i];
    element.addEventListener('click', function (e) {
        console.log('Tекст елементу по якому клікнули -> ', e.target.textContent);
    });
    element.addEventListener('click', function (e) {
        let text = e.target;
        let red = Math.floor(Math.random()*250);
        let green = Math.floor(Math.random()*250);
        let blue = Math.floor(Math.random()*250);
        text.style.color = `rgb(${red},${green},${blue})`;
    });
};

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let elemClassFcRulesColorText = document.querySelectorAll('.fc_rules');
for (let i = 0; i < elemClassFcRulesColorText.length; i++) {
    let element = elemClassFcRulesColorText[i];
    let red = Math.floor(Math.random()*250);
    let green = Math.floor(Math.random()*250);
    let blue = Math.floor(Math.random()*250);
    element.style.color = `rgb(${red},${green},${blue})`;
    // element.style.color = 'red';
};

//======================================================================================================================
//                                             Additional Work
//                                              OKTEN-AW-5-JS
//======================================================================================================================


//======================================================================================================================