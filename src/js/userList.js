import  _ from 'lodash';

function userList(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        sortedUsers.forEach((user) => {
            const div = document.createElement("div");
            const img = document.createElement('img');
            img.setAttribute('src', user.photo)
            div.append(user.name + ' ' + user.age);
            div.appendChild(img);
            container.appendChild(div);
        });
    }
}

module.exports = userList;
