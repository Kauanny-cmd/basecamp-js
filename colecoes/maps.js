function getAdmins(map){
    let admins = []

    for([key, value] of map){
        if(value == 'ADMIN'){
            admins.push(key)
        }
    }
    return admins;
}

let users = new Map();

users.set('Amanda', 'ADMIN')
users.set('Júlia', 'USER')
users.set('Naldo', 'USER')
users.set('João', 'ADMIN')
users.set('Miguel', 'ADMIN')
users.set('Larissa', 'USER')

console.log(getAdmins(users))
