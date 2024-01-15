const { faker } = require('@faker-js/faker');

exports.generateDummyData = () =>  {
    try { 
      return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        birthdate: faker.date.birthdate(),
      };
    }catch(err) { 
      console.error("error generating dummy data")
    }
  }
  