// let users = [];
class User {
    #login = null;
    #password = null;
    #cookie = null;
    constructor(login, password) {
        this.#login = login;
        this.#password = password;
        this.#cookie = null;
    }
    get login() {
        return this.#login;
    }
    get password() {
        return this.#password;
    }
    get cookie() {
        return this.#cookie;
    }
    set cookie(value) {
        this.#cookie = value;
    }

}

class DatabaseManager {
    static #users = [];
    static addUser(login, password) {
        console.log(`addUser: ${login} ${password}!`);
        DatabaseManager.#users.push(new User(login, password));
    }
    static getStatus(login, password) {
        console.log(login, password);
        for (let user of DatabaseManager.#users) {
            console.log(user);
            if (user.login == login && user.password == password) {
                console.log("getStatus: USER!");
                return 'user'
            }
        }
        return 'none'
    }
    static setCookieForUser(login, password) {
        for (let user of users)
            if (user.login == login && user.password == password) {
                user.cookie = makeid(8);
                console.log(`setCookieForUser: ${user.cookie}!`);
                return user.cookie;
            }
        return null;
    }
    static hasAccess(cookie) {
        for (let user of users)
            if (user.cookie == cookie) {
                console.log("hasAccess: True!");
                return true;
            }
        return false;
    }
}
function makeid(length) {   //https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
module.exports = DatabaseManager;
