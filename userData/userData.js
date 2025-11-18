const { faker } = require('@faker-js/faker');

const passwordLength = Math.floor(Math.random() * (72 - 8 + 1)) + 8;
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;

const userData = {

firstName,
lastName,
email,
password : faker.internet.password(passwordLength)

};

module.exports = userData;
