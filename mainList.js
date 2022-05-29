let localKey = 'items';
let items = JSON.parse(localStorage.getItem(localKey));
let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove All Items';

if (items.length > 0) {
    document.body.prepend(removeBtn);
}

removeBtn.addEventListener('click', function (e) {
    setTimeout(function(){
        location.reload();
    }, 500);
    items = JSON.parse(localStorage.removeItem(localKey));
});

for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let btnRemoveThisItem = document.createElement('button');
        btnRemoveThisItem.innerText = 'Удалить Этот Товар из списка';

        btnRemoveThisItem.addEventListener('click', function (e) {
            items = JSON.parse(localStorage.getItem(localKey));
            items.splice(i, 1);
            localStorage.setItem(localKey, JSON.stringify(items));
            setTimeout(function(){
                location.reload();
            }, 500);
        })

    let img = document.createElement('img');
    img.style = `
            width: 125px;
            display: flex;
            position: relative;
            bottom: 80px;
            left: 150px;
            margin-bottom: -75px;
        `
    for (let itemKey in item) {
        let div = document.createElement('div');
        let name = '';
        if (itemKey === 'count') {
            div.innerText = `${itemKey.split('')[0].toUpperCase() + itemKey.slice(1,itemKey.length)}: ${item[itemKey]} (шт)`;
            document.body.append(div);
        }
        if (itemKey === 'price') {
            div.innerText = `${itemKey.split('')[0].toUpperCase() + itemKey.slice(1,itemKey.length)}: ${item[itemKey]} (грн/шт)`;
            document.body.append(div);
        }
        if (itemKey === 'fullPrice') {
            div.innerText = `${itemKey.split('')[0].toUpperCase() + itemKey.slice(1, itemKey.length)}: ${item[itemKey]} (грн)`;
            document.body.append(div);
        }
        if (itemKey === 'name') {
            div.innerText = `${itemKey.split('')[0].toUpperCase() + itemKey.slice(1, itemKey.length)}: ${item[itemKey].split('')[0].toUpperCase() + item[itemKey].slice(1, item[itemKey].length)}`;
            document.body.append(div);
            name = item[itemKey].split('')[0].toUpperCase() + item[itemKey].slice(1, item[itemKey].length);
        }
        switch (name) {
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
    }
    document.body.append(img);
    document.body.append(btnRemoveThisItem);
    document.write(`<hr>`)
}