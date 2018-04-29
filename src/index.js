import $ from 'jquery';
import './css/styles.css';

const people = [
    { name: 'Vitaliy Timchenko', age: '33' },
    { name: 'Olga Timchenko', age: '30' },
    { name: 'Zlata Timchenko', age: '5' }
];

document.body.appendChild(createList(people));
document.body.appendChild(test(people));
$('.people-list').append($('<li>Dynamically created content...</li>'));

function createList(list) {
    const ul = document.createElement('ul');
    ul.className = 'people-list';

    if (list instanceof Array) {
        for (let i = 0; i < list.length; i++) {
            let node = document.createElement('li');
            let textNode = document.createTextNode(list[i].name + ': ' + list[i].age);
            node.appendChild(textNode);
            ul.appendChild(node);
        }
    }

    return ul
}

function test(list) {
    const element = document.createElement('p');
    const items = list.map(i => i.name + ' &mdash; ' + i.age);
    element.innerHTML = items.join('<br/>');
    return element;
}