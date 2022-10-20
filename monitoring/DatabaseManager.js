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
        console.log(users);
    }
    static getStatus(login, password){
        console.log(users);
        for(const user of users){
            if(User.login==login && User.password==password)
            return 'user'
            else
            return 'none'
        }
    }
}
module.exports = DatabaseManager;
