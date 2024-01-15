const { faker } = require('@faker-js/faker');

exports.generateDummyData = () =>  {
    try { 
      return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      };
    }catch(err) { 
      console.error("error generating dummy data")
    }
  }
  