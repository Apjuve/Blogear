const sequelize = require('../config/connection.js');
const seedBlog = require('./blogsData.js');
const seedComment = require('./commentsData.js');
const seedUser = require('./userData.js');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });

    await seedUser();

    await seedBlog();

        await seedComment();

        process.exit();
    } catch (err) {
        if(err){
            throw err;
        }
    }
   
};

seedAll();