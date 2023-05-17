const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedpost = require('./PostData');
const seedComment = require('./commentData')

const seedAll = async () => {
  await sequelize.sync({ force: false });

  // await seedUser();

  // await seedpost();
  await seedComment();

  process.exit(0);
};

seedAll();
