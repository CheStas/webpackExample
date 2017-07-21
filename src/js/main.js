// Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

import '../css/style.scss';

import userList from './userList.js';

import photo1 from '../img/1.jpg';
import photo2 from '../img/2.jpg';
import photo3 from '../img/3.jpg';
import photo4 from '../img/4.jpg';
import photo5 from '../img/5.jpg';
import photo6 from '../img/6.jpg';
import photo7 from '../img/7.jpg';
import photo8 from '../img/8.jpg';
import photo9 from '../img/9.jpg';

const users = [
    { name: 'Oksana', age: 22, photo: photo1},
    { name: 'Viktor', age: 14, photo: photo2},
    { name: 'Ivan', age: 37, photo: photo3},
    { name: 'Yana', age: 45, photo: photo4},
    { name: 'Oleksandr', age: 19, photo: photo5},
    { name: 'Olena', age: 18, photo: photo6},
    { name: 'Mykola', age: 27, photo: photo7},
    { name: 'Andriy', age: 33, photo: photo8},
    { name: 'Zakhar', age: 40, photo: photo9}
];

const userListModule = new userList(users);
userListModule.showList();
