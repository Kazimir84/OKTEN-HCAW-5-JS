let div = document.createElement('div');
let localKey = 'name';
let name = JSON.parse(localStorage.getItem(localKey));

for (let i = 0; i < name.length; i++) {
    let element = name[i];
    console.log('eeee', element);
    div.innerText = `Input Name: ${element}`;
    document.body.append(div);
};
