const faker = require('faker');
const fs = require('fs');

function generateUsers(){
    let users = []

    for (let i = 1; i <= 20; i++){
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        let email = faker.internet.email()

        users.push({
            'id': i,
            'first_name': firstName,
            'last_name': lastName,
            'email': email
        })
    }

    return {'users': users}
}

let dataObj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));