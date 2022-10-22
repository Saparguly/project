let users = [];
class User {
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
}

class DatabaseManager {
    static addUser(login, password){
        users.push(new User(login, password));
    }
    static getStatus(login, password){
        for(let user of users){
            if(user.login==login && user.password==password)
            return 'user'
            else
            return 'none'
        }
    }
}
module.exports = DatabaseManager;
